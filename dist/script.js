'use strict';

require('es6-promise').polyfill();
require('isomorphic-fetch');
require('babel-polyfill');

var apiKey = '8bcb59eab0ba4037a458aa735a570dd2',
    url = 'https://newsapi.org/v1/articles?source=bbc-news&apiKey=' + apiKey,
    wrapper = document.querySelector('.wrapper'),
    commonContainer = document.createElement('div'),
    apiLink = 'https://newsapi.org/';

/* Just get data from server and throw it further */
(function () {
  fetch(url, {
    mode: 'cors'
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    return parseResponse(data);
  }).catch(function (err) {
    return console.log(err);
  });
})();

/* Process each element from response */
function parseResponse(data) {
  data.articles.forEach(function (item) {
    return fulfillSingleNews(item);
  });
  addCopyright();
  showNews();
}

function fulfillSingleNews(item) {
  /* Create necessary tags that will be added in DOM */
  var singleContainerTemplate = '<a class="title" href="' + item.url + '"><h2>' + item.title + '</h2></a>\n                                  <a class="pic" href="' + item.url + '"><img src="' + item.urlToImage + '"/></a>\n                                  <h3 class="description">' + item.description + '</h3>\n                                  <span class="author">By ' + item.author + '</span>\n                                  <span class="published-time">' + new Date(item.publishedAt).toDateString() + '</span>',
      singleContainer = document.createElement('div');

  singleContainer.classList.add('single-container');
  singleContainer.innerHTML = singleContainerTemplate;
  commonContainer.appendChild(singleContainer);
}

function addCopyright() {
  var copyright = document.createElement('a');

  copyright.href = apiLink;
  copyright.classList.add('copyright');
  copyright.innerHTML = 'API used from ' + apiLink;

  commonContainer.appendChild(copyright);
}

function showNews() {
  wrapper.appendChild(commonContainer);
  wrapper.style.visibility = 'visible';
  wrapper.style.opacity = 1;
}