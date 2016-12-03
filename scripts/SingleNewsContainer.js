/* Applying design pattern Builder */

class SingleNewsContainer {
  constructor(item) {
    this.template = `<a class="title" href="${item.url}"><h2>${item.title}</h2></a>
                    <a class="pic" href="${item.url}"><img src="${item.urlToImage}"/></a>
                    <h3 class="description">${item.description}</h3>
                    <span class="author">By ${item.author}</span>
                    <span class="published-time">${new Date(item.publishedAt).toDateString()}</span>`;
    this.singleContainer = document.createElement('div');
  }

  fulfillContainer() {
    this.singleContainer.classList.add('single-container');
    this.singleContainer.innerHTML = this.template;
  }

  getContainer() {
    return this.singleContainer;
  }
}

module.exports = SingleNewsContainer;
