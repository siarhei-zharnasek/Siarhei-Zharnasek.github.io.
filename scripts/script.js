require('../styles/main.css');
document.querySelector('.loader-button').addEventListener('click', (e) => {
  e.target.style.display = 'none';
  require.ensure([], require => {
    require('es6-promise').polyfill();
    require('isomorphic-fetch');
    require('babel-polyfill');
    require('../styles/common.css');

    const { NewsParser } = require('./newsModules');
    const Subject = require('./Subject');
    const SubjectInstance = new Subject();

    let parseNews = new NewsParser();
    let unsubscribeBtn = document.querySelector('.unsubscribe');
    let subscribeBtn = document.querySelector('.subscribe');

    SubjectInstance.subscribe(parseNews);
    unsubscribeBtn.style.visibility = 'visible';

    unsubscribeBtn.addEventListener('click', () => {
      SubjectInstance.unsubscribe(parseNews);
      console.log(`${parseNews.source} successfully unsubscribed!`);
      unsubscribeBtn.style.visibility = 'hidden';
      subscribeBtn.style.visibility = 'visible';
    });

    subscribeBtn.addEventListener('click', () => {
      console.log(`${parseNews.source} successfully subscribed!`);
      SubjectInstance.subscribe(parseNews);
      subscribeBtn.style.visibility = 'hidden';
      unsubscribeBtn.style.visibility = 'visible';
    });
  });
});
