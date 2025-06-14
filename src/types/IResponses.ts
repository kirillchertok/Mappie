interface IOverpassElement {
    type: string;
    id: number;
    lat: number;
    lon: number;
    tags: {
        name?: string;
        tourism?: string;
        historic?: string;
        amenity?: string;
        leisure?: string;
        description?: string;
        wikidata?: string;
        wikipedia?: string;
        [key: string]: string | undefined;
    };
}

interface IWikidataResponse {
    entities: {
        [id: string]: {
            descriptions?: {
                en?: {
                    value: string;
                };
            };
            claims?: {
                P18?: Array<{
                    mainsnak: {
                        datavalue: {
                            value: string;
                        };
                    };
                }>;
            };
        };
    };
}

interface IOSRMResponse {
    routes: [
        {
            duration: number;
            distance: number;
        }
    ];
}

export type {
    IOSRMResponse as OSRMResponse,
    IOverpassElement as OverpassElement,
    IWikidataResponse as WikidataResponse,
};
