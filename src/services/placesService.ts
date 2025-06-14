import axios from 'axios';

import $api, { API_URL } from '@/api/api';
import { OSM_TAG_TO_TYPE } from '@/constants/OSMTags';
import type { IPlace } from '@/types/IPlace';
import type { IPlaceType } from '@/types/IPlaceType';
import type { OverpassElement, WikidataResponse } from '@/types/IResponses';
import { buildQuery } from '@/utils/buildQuery';

import { LocalStorageService } from './localStorageService';

export default class PlacesService {
    public static async getPlaces(
        lat: number,
        lon: number,
        radius: number,
        types: IPlaceType[]
    ): Promise<IPlace[]> {
        const cache = LocalStorageService.getCache({ lat, lon, radius, types });

        if (cache) {
            console.log(cache);
            return cache;
        }

        try {
            const query = buildQuery({ lat, lon, radius, types });
            const response = await $api.get<{ elements: OverpassElement[] }>(API_URL, {
                params: { data: query },
            });

            if (!response.data.elements) return [];

            const places: IPlace[] = await Promise.all(
                response.data.elements.map(async (element: OverpassElement) => {
                    const place: IPlace = {
                        id: element.id,
                        lat: element.lat,
                        lon: element.lon,
                        name: element.tags?.name || 'Нет названия',
                        type: this.extractTypes(element.tags || {}),
                        wikidata: element.tags?.wikidata,
                        wikipedia: element.tags?.wikipedia,
                        img: '',
                        description: element.tags?.description,
                    };

                    if (!place.description && place.wikidata) {
                        place.description = await this.fetchWikidataDescription(place.wikidata);
                    }

                    if (place.wikidata) {
                        place.img = await this.fetchWikidataImage(place.wikidata);
                    }

                    return place;
                })
            );
            LocalStorageService.setCache({ lat, lon, radius, types, places });
            return places;
        } catch (error) {
            console.error('Error in getPlaces:', error);
            return [];
        }
    }

    private static extractTypes(tags: Record<string, string | undefined>): string[] {
        const types: Set<string> = new Set();
        for (const [tagKey, tagValue] of Object.entries(tags)) {
            if (tagValue) {
                const combinedTag = `${tagKey}=${tagValue}`;
                if (OSM_TAG_TO_TYPE[combinedTag]) {
                    types.add(OSM_TAG_TO_TYPE[combinedTag]);
                } else if (OSM_TAG_TO_TYPE[tagKey]) {
                    types.add(OSM_TAG_TO_TYPE[tagKey]);
                }
            }
        }

        return Array.from(types);
    }

    private static async fetchWikidataDescription(wikidataId: string): Promise<string | undefined> {
        try {
            const response = await axios.get<WikidataResponse>(
                `/wikidata/w/api.php?action=wbgetentities&ids=${wikidataId}&format=json&props=descriptions&languages=en`
            );
            const description = response.data.entities[wikidataId]?.descriptions?.en?.value;
            return description ?? '';
        } catch (error) {
            console.error('Error fetching Wikidata description:', error);
            return '';
        }
    }

    private static async fetchWikidataImage(wikidataId: string): Promise<string> {
        try {
            const response = await axios.get<WikidataResponse>(
                `/wikidata/w/api.php?action=wbgetentities&ids=${wikidataId}&format=json&props=claims`
            );
            const imageFile =
                response.data.entities[wikidataId]?.claims?.P18?.[0]?.mainsnak?.datavalue?.value;
            return imageFile
                ? `https://commons.wikimedia.org/wiki/Special:FilePath/${encodeURIComponent(
                      imageFile
                  )}?width=300`
                : '';
        } catch (error) {
            console.error('Error fetching Wikidata image:', error);
            return '';
        }
    }
}
