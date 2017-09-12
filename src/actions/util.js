import axios from 'axios';
const baseURL = 'public/async/'

export function getData(url) {
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
    axios.request(config)
    .then(data => {
        console.log('test axios',data.data);
        return data.data;
    })
    .catch(error => {
        console.log(error);
        return error;
    });
}
