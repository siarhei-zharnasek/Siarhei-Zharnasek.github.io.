require('../styles/main.css');
document.querySelector('.loader-button').addEventListener('click', (e) => {
  e.target.style.display = 'none';
  require.ensure([], require => {
    require('es6-promise').polyfill();
    require('isomorphic-fetch');
    require('babel-polyfill');
    require('../styles/common.css');

    const dataGetService = require('./dataGetService');
    const NewsParser = require('./NewsParser');

    let parseNews = new NewsParser();

    dataGetService()
      .then(data => parseNews.parseResponse(data))
      .catch(err => console.log(err));
  });
});
