'use strict';

var u = require('unist-builder');


module.exports = function () {
  return u('root', [
    u('paragraph', [
      u('text', 'first')
    ]),
    u('paragraph', [
      u('text', 'second'),
      u('text', ' '),
      u('text', 'value')
    ])
  ]);
};
