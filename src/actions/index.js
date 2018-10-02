import axios from 'axios';

const BART_API_URL_BASE = 'https://api.bart.gov/api';
const BART_API_URL_PARAMS = `key=${process.env.REACT_APP_BART_API_KEY}&json=y`;

export const FETCH_ADVISORIES = 'FETCH_ADVISORIES';
export const FETCH_STATIONS = 'FETCH_STATIONS';
export const FETCH_STATION_INFO = 'FETCH_STATION_INFO';
export const FETCH_STATION_ETD = 'FETCH_STATION_ETD';

export function fetchAdvisories() {
    const BART_API_URL_BSA = `${BART_API_URL_BASE}/bsa.aspx?cmd=bsa&${BART_API_URL_PARAMS}`;
    const response = axios.get(BART_API_URL_BSA);
    return {
        type: FETCH_ADVISORIES,
        payload: response
    }
}

export function fetchStations() {
    const BART_API_URL_STN_STNS = `${BART_API_URL_BASE}/stn.aspx?cmd=stns&${BART_API_URL_PARAMS}`;
    const response = axios.get(BART_API_URL_STN_STNS);
    return {
        type: FETCH_STATIONS,
        payload: response
    }
}

export function fetchStationInfo(station) {
    const BART_API_URL_SCHED_STN = `${BART_API_URL_BASE}/sched.aspx?cmd=stnsched&orig=${station}&${BART_API_URL_PARAMS}`;
    const response = axios.get(BART_API_URL_SCHED_STN);
    return {
        type: FETCH_STATION_INFO,
        payload: response
    }
}

export function fetchStationEtd(station) {
    const BART_API_URL_ETD = `${BART_API_URL_BASE}/etd.aspx?cmd=etd&orig=${station}&${BART_API_URL_PARAMS}`;
    const response = axios.get(BART_API_URL_ETD);
    return {
        type: FETCH_STATION_ETD,
        payload: response
    }
}