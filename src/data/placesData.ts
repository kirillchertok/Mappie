import type { IPlace } from '@/types/IPlace';

const BASE_IMG_URL = '/src/data/base_place.png';

const BASE_TYPES = ['sport', 'history'];

const BASE_LOREM_DESCRIPTION =
    'Lörem ipsum dinas attitydig inte hungerpandemi även om kagt foren. Nimårat koldioxidneutralt vin. Coronaanpassa tess. Lotåliga framtidsfullmakt. Hackathon stenoryktig valurade, dekronar viktig. Vigenade häns nyt i dogmafilm kontraskap. Häling vaktig tröskelboende sur. Ditreska pregengen, såsom sped vivis, det vill säga dagshandlare. Temakonfirmation. Ossa ger kuck. Kuratera lyk fastän köttrymden. Ber kaliga. Julgranssyndrom terar ar sugangen curlingförälder. Spenegen begalig kanelig. Mibelt social turism om spemånat, sav. ';

export const DATA: Array<IPlace> = [
    {
        name: 'Фантаcмагарический музей им. П.М. Машерова',
        description: BASE_LOREM_DESCRIPTION,
        img: BASE_IMG_URL,
        types: BASE_TYPES,
    },
    {
        name: 'Place2',
        description: BASE_LOREM_DESCRIPTION,
        img: BASE_IMG_URL,
        types: BASE_TYPES,
    },
    {
        name: 'Place3',
        description: BASE_LOREM_DESCRIPTION,
        img: BASE_IMG_URL,
        types: BASE_TYPES,
    },
    {
        name: 'Place4',
        description: BASE_LOREM_DESCRIPTION,
        img: BASE_IMG_URL,
        types: BASE_TYPES,
    },
];
