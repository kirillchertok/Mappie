import { TYPE_TO_OSM_TAG } from '@/constants/OSMTags';
import type { IBuildQuery } from '@/types/IUtils/IBuildQuery';

export const buildQuery = ({ lat, lon, radius, types }: IBuildQuery) => {
    const typeConditions = types
        .map(type => {
            const osmTags = TYPE_TO_OSM_TAG[type.normalizedName] || [
                `tourism=${type.normalizedName}`,
            ];
            return osmTags
                .map(tag => {
                    if (tag.includes('=')) {
                        return `node["${tag.split('=')[0]}"="${
                            tag.split('=')[1]
                        }"](around:${radius},${lat},${lon});`;
                    } else {
                        return `node["${tag}"](around:${radius},${lat},${lon});`;
                    }
                })
                .join('\n');
        })
        .join('\n');

    return `
        [out:json];
        (
        ${typeConditions}
        );
        out body;
        >;
        out tags qt;
    `;
};
