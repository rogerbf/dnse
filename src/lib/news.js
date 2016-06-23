const urls = require('./urls.js')
const CreateScraper = require('x-ray')
const scraper = CreateScraper({
  filters: {
    trim: function (value) {
      return typeof value === 'string' ? value.trim() : value
    }
  }
})

const scrape = scraper(urls.nyheter, '.js-start-page .grid > .grid__item .section__content > a', [{
  datetime: 'time@datetime',
  title: '.article-teaser__title-text',
  summary: '.article-teaser__summary-text | trim',
  url: '@href'
}])

function news () {
  return new Promise((resolve, reject) => {
    scrape((err, news) => {
      if (err) reject(err)
      resolve(news)
    })
  })
}

module.exports = news
