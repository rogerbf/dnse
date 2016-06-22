const Scraper = require('x-ray')
const scrape = Scraper({
  filters: {
    trim: function (value) {
      return typeof value === 'string' ? value.trim() : value
    }
  }
})

const url = 'http://www.dn.se'

/*
Senaste nytt struktur:
.article-teaser-list--stretchable .flex-item li
  a -> [href], [title]
  .article-teaser__datetime -> [datetime]
  .article-teaser__title-text
  .article-teaser__summary-text
*/

scrape(url, '.article-teaser-list--stretchable .flex-item li', [{
  datetime: '.article-teaser__datetime@datetime',
  title: '.article-teaser__title-text',
  summary: '.article-teaser__summary-text | trim',
  url: 'a@href'
}])((err, obj) => {
  if (err) throw new Error(err)
  console.log(JSON.stringify(obj, null, 2))
})
