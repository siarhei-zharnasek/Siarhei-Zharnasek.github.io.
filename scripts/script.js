'use strict';

let apiKey = '8bcb59eab0ba4037a458aa735a570dd2',
    url = `https://newsapi.org/v1/articles?source=bbc-news&apiKey=${apiKey}`,
    wrapper = document.querySelector('.wrapper'),
    commonContainer = document.createElement('div'),
    apiLink = 'https://newsapi.org/';

/* Just get data from server and throw it further */
(function() {
  fetch(url).then(response => response.json())
    .then(data => parseResponse(data))
    .catch(err => console.log(err));
})();

/* Process each element from response */
function parseResponse(data) {
  data.articles.forEach(item => fulfillSingleNews(item));
  addCopyright();
  showNews();
}

function fulfillSingleNews(item) {
  /* Create necessary tags that will be added in DOM */
  let singleContainerTemplate = `<a class="title" href="${item.url}"><h2>${item.title}</h2></a>
                                  <a class="pic" href="${item.url}"><img src="${item.urlToImage}"/></a>
                                  <h3 class="description">${item.description}</h3>
                                  <span class="author">By ${item.author}</span>
                                  <span class="published-time">${new Date(item.publishedAt).toDateString()}</span>`,
      singleContainer = document.createElement('div');

  singleContainer.classList.add('single-container');
  singleContainer.innerHTML = singleContainerTemplate;
  commonContainer.append(singleContainer);
}

function addCopyright() {
  let copyright = document.createElement('a');

  copyright.href = apiLink;
  copyright.classList.add('copyright');
  copyright.innerHTML = `API used from ${apiLink}`;
  
  commonContainer.append(copyright);
}

function showNews() {
  wrapper.append(commonContainer);
  wrapper.style.visibility = 'visible';
  wrapper.style.opacity = 1;
}
