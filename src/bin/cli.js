#!/usr/bin/env node

const dn = require('../index.js')

dn[process.argv[2]]()
  .then(news => console.log(JSON.stringify(news, null, 2)))
  .catch(e => console.log(e))
