let wrapper = document.querySelector('.wrapper');
const { url, apiLink } = require('./constants');
const SingleNewsContainer = require('./SingleNewsContainer');

class NewsParser {
  constructor() {
    this.commonContainer = document.createElement('div');
    this.source = 'NewsParser';
  }

/* Process each element from response */
  parseResponse(articles) {
    articles.forEach(item => {
      const SingleNews = new SingleNewsContainer(item);
      SingleNews.fulfillContainer();
      const SingleNewsContainerInstance = SingleNews.getContainer();
      this.commonContainer.appendChild(SingleNewsContainerInstance);
    });
    this.addCopyright();
    this.showNews();
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

  update(articles) {
    this.parseResponse(articles);
  }
}

module.exports = NewsParser;
