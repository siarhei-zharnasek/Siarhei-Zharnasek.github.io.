/* Just get data from server and throw it further */
const { url } = require('./constants');
let dataGetService = () => fetch(url, { mode: 'cors' })
                            .then(response => response.json());

module.exports = dataGetService;
