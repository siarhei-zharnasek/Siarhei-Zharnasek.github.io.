const { dataGetService } = require('./newsModules');

class Subject {
  constructor() {
    this.subscribers = [];
    this.articles = [];
    this.getArticles = this.getArticles.bind(this);
  }

  subscribe(observer) {
    this.subscribers.push(observer);
    if (!this.updatingNews) {
      this.updatingNews = this.getArticles();
      this.updatingNews = this.getArticlesInterval();
    }
  }

  unsubscribe(observer) {
    this.subscribers = this.subscribers.filter(subscriber => subscriber.source !== observer.source);
    if (!this.subscribers.length) {
      clearInterval(this.updatingNews);
      this.updatingNews = '';
    }
  }

  getArticles() {
    let self = this;
    console.log('Get new portion of articles!');
    dataGetService()
      .then(data => self.checkResponse(data))
      .catch(err => console.log(err));
  }

  checkResponse(data) {
    if (!this.articles.length) {
      this.articles = data.articles;
    } else {
      if (this.articles[0].title !== data.articles[0].title) {
        this.articles = data.articles;
      } else {
        return;
      }
    }
    this.publish();
  }

  publish() {
    this.subscribers.forEach(subscriber => subscriber.update(this.articles));
  }

  getArticlesInterval() {
    return setInterval(this.getArticles, 10000);
  }
}

module.exports = Subject;
