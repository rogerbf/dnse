# Dagens Nyheter

Get the latest news and headlines from dn.se and its subsections.

In Node.js:
```
npm install dnse
```
As a command line tool:
```
npm install -g dnse
```
The `dn` command is now available in your command line.

## Usage

### Node.js

``` javascript
const dn = require('dnse')

dn.news.latest()
  .then(news => console.log(news))
  .catch(e => console.error(e))
```

### CLI

```
dn [section] [latest || headlines]
```

`[section]` can be: `news`, `economy`, `culture`, `sthlm`, `sports`.

## API

Both `latest()` and `headlines()` return a promise which resolves to an array of objects with the following structure:

``` javascript
{
  datetime: "2016-07-13T15:53:00.0000000+02:00",
  title: "lorem"
  summary: "ipsum"
  url: "article.url"
}
```

`dn.[section].latest()`

Returns the most recently published headlines.

`dn.[section].headlines()`

Returns the headlines of the `[section]`.

`[section]` can be any of the following:

- `news`
- `economy`
- `culture`
- `sthlm`
- `sports`
