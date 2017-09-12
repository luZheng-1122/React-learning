import axios from 'axios';
import {getData} from './util';
export const GET_LIST = 'get_list';
export const GET_CONFIG = 'get_config';

const ROOT_URL = './async/';
const baseURL = 'public/async/'
export function getList() {
    const url = 'lists/list.json';
    const config = {
        url: url,
        method: 'get',
        baseURL: baseURL,
        // `transformResponse` allows changes to the response data to be made before
        // it is passed to then/catch
        //there is a transformRequest to change tha data before sending, but only applicable for PUT, POST, PATCH
        // transformResponse: [data => {
        //     console.log('test transform',data);
        //     //用于修改data中的值
        //     data._page = 2;
        //     return data;
        // }],
        // `timeout` specifies the number of milliseconds before the request times out.
        // If the request takes longer than `timeout`, the request will be aborted.
        timeout: 10000,
        // `adapter` allows custom handling of requests which makes testing easier.
        // Return a promise and supply a valid response (see lib/adapters/README.md).
        // adapter: function (config) {/* ... */},
        responseType: 'json', //default
        // `onUploadProgress` allows handling of progress events for uploads
        onUploadProgress: function (progressEvent) {
            // Do whatever you want with the native progress event
        },

        // `onDownloadProgress` allows handling of progress events for downloads
        onDownloadProgress: function (progressEvent) {
            // Do whatever you want with the native progress event
        }
    }

    const request = axios.request(config);
    // getData(url);
    // console.log('no then',request);
    //promise object, but after this, the promise will dispatch it

    return {
        type: GET_LIST,
        payload: request
    };
}

export function getConfig() {
    const url = 'config.json';
    const data = axios.get(baseURL+url);

    return {
        type: GET_CONFIG,
        payload: data
    }
}