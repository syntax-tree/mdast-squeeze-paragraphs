'use strict'

var test = require('tape')
var output = require('./data/output')
var input = require('./data/input')
var squeezeParagraphs = require('..')

test(function(t) {
  t.deepEqual(squeezeParagraphs(input()), output())
  t.end()
})
