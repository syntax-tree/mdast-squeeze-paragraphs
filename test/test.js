'use strict';

var squeezeParagraphs = require('..');

var test = require('tape');


test(function (t) {
  var input = require('./input');
  var output = require('./output');

  t.deepEqual(squeezeParagraphs(input), output);
  t.end();
});
