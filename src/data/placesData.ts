import type { IPlace } from '@/types/IPlace';

const BASE_LAT_LON = {
    lat: 52.001,
    lon: 25.001,
};

const BASE_IMG_URL = '/src/data/base_place.png';

const BASE_TYPES = ['sport', 'history'];

const BASE_LOREM_DESCRIPTION =
    'Lörem ipsum dinas attitydig inte hungerpandemi även om kagt foren. Nimårat koldioxidneutralt vin. Coronaanpassa tess. Lotåliga framtidsfullmakt. Hackathon stenoryktig valurade, dekronar viktig. Vigenade häns nyt i dogmafilm kontraskap. Häling vaktig tröskelboende sur. Ditreska pregengen, såsom sped vivis, det vill säga dagshandlare. Temakonfirmation. Ossa ger kuck. Kuratera lyk fastän köttrymden. Ber kaliga. Julgranssyndrom terar ar sugangen curlingförälder. Spenegen begalig kanelig. Mibelt social turism om spemånat, sav. ';

export const DATA: Array<IPlace> = [
    {
        id: 1,
        name: 'Фантаcмагарический музей им. П.М. Машерова',
        description: BASE_LOREM_DESCRIPTION,
        img: BASE_IMG_URL,
        type: BASE_TYPES,
        lat: BASE_LAT_LON.lat,
        lon: BASE_LAT_LON.lon,
    },
    {
        id: 2,
        name: 'Place2',
        description: BASE_LOREM_DESCRIPTION,
        img: BASE_IMG_URL,
        type: BASE_TYPES,
        lat: BASE_LAT_LON.lat,
        lon: BASE_LAT_LON.lon,
    },
    {
        id: 3,
        name: 'Place3',
        description: BASE_LOREM_DESCRIPTION,
        img: BASE_IMG_URL,
        type: BASE_TYPES,
        lat: BASE_LAT_LON.lat,
        lon: BASE_LAT_LON.lon,
    },
    {
        id: 4,
        name: 'Place4',
        description: BASE_LOREM_DESCRIPTION,
        img: BASE_IMG_URL,
        type: BASE_TYPES,
        lat: BASE_LAT_LON.lat,
        lon: BASE_LAT_LON.lon,
    },
];
