import { buildQuery } from '../buildQuery';

describe('buildQuery', () => {
    const baseParams = {
        lat: 52.52,
        lon: 13.405,
        radius: 1000,
        types: [
            {
                name: 'Природа',
                normalizedName: 'nature',
                img: {
                    src: '/src/assets/images/placeTypes/nature.png',
                    alt: 'Nature type icon',
                },
            },
            {
                name: 'Религия',
                normalizedName: 'religion',
                img: {
                    src: '/src/assets/images/placeTypes/religion.png',
                    alt: 'Religion type icon',
                },
            },
        ],
    };

    it('Правильное значение для типа "nature"', () => {
        const params = { ...baseParams, types: [baseParams.types[0]] };
        const result = buildQuery(params);
        expect(result).toMatchInlineSnapshot(`
"
        [out:json];
        (
        node["natural"](around:1000,52.52,13.405);
        );
        out body;
        >;
        out tags qt;
    "
`);
    });

    it('Правильное значение для типа с тегом содержащим "=" (religion)', () => {
        const params = { ...baseParams, types: [baseParams.types[1]] };
        const result = buildQuery(params);
        expect(result).toMatchInlineSnapshot(`
"
        [out:json];
        (
        node["amenity"="place_of_worship"](around:1000,52.52,13.405);
        );
        out body;
        >;
        out tags qt;
    "
`);
    });

    it('Правильное значение для нескольких типов', () => {
        const result = buildQuery(baseParams);
        expect(result).toMatchInlineSnapshot(`
"
        [out:json];
        (
        node["natural"](around:1000,52.52,13.405);
node["amenity"="place_of_worship"](around:1000,52.52,13.405);
        );
        out body;
        >;
        out tags qt;
    "
`);
    });
});
