export interface IPlace {
    id: number;
    lat: number;
    lon: number;
    name: string;
    description?: string;
    type: string[];
    wikidata?: string;
    wikipedia?: string;
    img: string;
}
