import type { IBuildQuery } from '@/types/IUtils/IBuildQuery';

export const buildQuery = ({ lat, lon, radius, types }: IBuildQuery) => {
    const typeConditions = types
        .map(type => `node["tourism"="${type}"](around:${radius},${lat},${lon});`)
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
