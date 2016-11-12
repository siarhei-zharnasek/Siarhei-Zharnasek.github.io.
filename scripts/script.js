'use strict';

let apiKey = '8bcb59eab0ba4037a458aa735a570dd2',
    url = `https://newsapi.org/v1/articles?source=bbc-news&apiKey=${apiKey}`,
    wrapper = document.querySelector('.wrapper'),
    apiLink = 'https://newsapi.org/',
    resultsLength;

/* Just get data from server and throw it further */
(function() {
  fetch(url).then(response => response.json())
    .then(data => parseResponse(data))
    .catch(err => console.log(err));
})();

/* Process each element from response */
function parseResponse(data) {
  resultsLength = data.articles.length;
  data.articles.forEach(item => paintNews(item));
}

function paintNews(item) {
  /* Create necessary tags that will be added in DOM */
  let singleContainer = document.createElement('div'),
      titleAnchor = document.createElement('a'),
      title = document.createElement('h2'),
      author = document.createElement('span'),
      imageAnchor = document.createElement('a'),
      image = document.createElement('img'),
      description = document.createElement('h3'),
      publishedTime = document.createElement('span'),
      copyright = document.createElement('a');

  /* Add necessary classes to elements */
  singleContainer.classList.add('single-container');
  titleAnchor.classList.add('title');
  author.classList.add('author');
  imageAnchor.classList.add('pic');
  description.classList.add('description');
  publishedTime.classList.add('publishedTime');

  /* Fulfill every tag with content from response */
  title.innerText = item.title;
  imageAnchor.href = title.href = item.url;
  author.innerText = `By ${item.author}`;
  image.src = item.urlToImage;
  description.innerText = item.description;
  publishedTime.innerText = new Date(item.publishedAt).toDateString();

  /* Append elements in DOM */
  imageAnchor.append(image);
  titleAnchor.append(title);
  singleContainer.append(titleAnchor, imageAnchor, description, author, publishedTime);
  wrapper.append(singleContainer);

  /* Check if all elements from response exist in DOM and then display them slightly */
  if (wrapper.children.length === resultsLength + 1) {
    copyright.innerText = `API used from ${apiLink}`;
    copyright.href = apiLink;
    copyright.classList.add('copyright');
    wrapper.append(copyright);
    wrapper.style.visibility = 'visible';
    wrapper.style.opacity = 1;
  }
}
