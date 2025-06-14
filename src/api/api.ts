import axios from 'axios';

export const API_URL = 'https://maps.mail.ru/osm/tools/overpass/api/interpreter';

const $api = axios.create({
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
});

export default $api;
