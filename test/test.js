'use strict';

var squeezeParagraphs = require('..'),
    input = require('./data/input'),
    output = require('./data/output');

var test = require('tape');


test(function (t) {
  t.deepEqual(squeezeParagraphs(input()), output());
  t.end();
});
