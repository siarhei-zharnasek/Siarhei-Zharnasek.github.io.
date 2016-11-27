let wrapper = document.querySelector('.wrapper');
const { url, apiLink } = require('./constants');

class NewsParser {
  constructor() {
    this.commonContainer = document.createElement('div')
  }

/* Process each element from response */
  parseResponse(data) {
    data.articles.forEach(item => this.fulfillSingleNews(item));
    this.addCopyright();
    this.showNews();
  }

  fulfillSingleNews(item) {
    const singleContainerTemplate = `<a class="title" href="${item.url}"><h2>${item.title}</h2></a>
                            <a class="pic" href="${item.url}"><img src="${item.urlToImage}"/></a>
                            <h3 class="description">${item.description}</h3>
                            <span class="author">By ${item.author}</span>
                            <span class="published-time">${new Date(item.publishedAt).toDateString()}</span>`;
    const singleContainer = document.createElement('div');
    singleContainer.classList.add('single-container');
    singleContainer.innerHTML = singleContainerTemplate;
    this.commonContainer.appendChild(singleContainer);
  }

  addCopyright() {
    let copyright = document.createElement('a');
    copyright.href = apiLink;
    copyright.classList.add('copyright');
    copyright.innerText = `API used from ${apiLink}`;
    this.commonContainer.appendChild(copyright);
  }

  showNews() {
    wrapper.appendChild(this.commonContainer);
    wrapper.style.visibility = 'visible';
    wrapper.style.opacity = 1;
  }
}

module.exports = NewsParser;
