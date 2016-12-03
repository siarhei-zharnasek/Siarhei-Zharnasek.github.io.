/* Implement Facade design pattern */

const dataGetService = require('./dataGetService');
const NewsParser = require('./NewsParser');

module.exports = { dataGetService, NewsParser };
