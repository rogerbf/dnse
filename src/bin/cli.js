#!/usr/bin/env node

const dn = require('../index.js')

dn.latest()
  .then(news => console.log(JSON.stringify(news, null, 2)))
  .catch(e => console.log(e))
