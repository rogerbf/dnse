const urls = require('./urls.js')

const Scraper = require('x-ray')
const scraper = Scraper({
  filters: {
    trim: function (value) {
      return typeof value === 'string' ? value.trim() : value
    }
  }
})

const scrape = scraper(urls.nyheter, '.article-teaser-list--stretchable .flex-item li', [{
  datetime: '.article-teaser__datetime@datetime',
  title: '.article-teaser__title-text',
  summary: '.article-teaser__summary-text | trim',
  url: 'a@href'
}])

function latestNews () {
  return new Promise((resolve, reject) => {
    scrape((err, news) => {
      if (err) reject(err)
      resolve(news)
    })
  })
}

module.exports = latestNews
