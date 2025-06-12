interface OverpassElement {
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

interface WikidataResponse {
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

export type { OverpassElement, WikidataResponse };
