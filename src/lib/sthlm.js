const urls = require('./urls.js')
const scrape = require('x-ray')({
  filters: {
    trim: function (value) {
      return typeof value === 'string' ? value.trim() : value
    }
  }
})

const selectors = {
  latest: '.article-teaser-list--timeline .widget__list-item--flex',
  headlines: '.grid .section__content > a'
}

const scrapeLatest = scrape(urls.sthlm, selectors.latest, [{
  datetime: 'time@datetime',
  title: '.article-teaser__title-text',
  summary: '.article-teaser__summary-text | trim',
  url: 'a@href'
}])

const scrapeHeadlines = scrape(urls.sthlm, selectors.headlines, [{
  datetime: 'time@datetime',
  title: '.article-teaser__title-text',
  summary: '.article-teaser__summary-text | trim',
  url: '@href'
}])

const latest = () => {
  return new Promise((resolve, reject) => {
    scrapeLatest((err, latest) => {
      if (err) reject(err)
      resolve(latest)
    })
  })
}

const headlines = () => {
  return new Promise((resolve, reject) => {
    scrapeHeadlines((err, headlines) => {
      if (err) reject(err)
      resolve(headlines)
    })
  })
}

module.exports = {
  latest,
  headlines
}
