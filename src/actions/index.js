export const GET_LIST = 'get_list';
export const GET_CONFIG = 'get_config';

const ROOT_URL = './async/';

export function getList() {
    const url = ROOT_URL + 'lists/list.json';
    const data = require('./async/lists/list.json');

    return {
        type: GET_LIST,
        payload: data
    };
}

export function getConfig() {
    const url = ROOT_URL + 'config.json';
    const data = require('./async/config.json');

    return {
        type: GET_CONFIG,
        payload: data
    }
}