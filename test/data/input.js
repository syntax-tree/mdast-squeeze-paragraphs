'use strict';

var u = require('unist-builder');


module.exports = function () {
  return u('root', [
    u('paragraph', []),
    u('paragraph', [
      u('text', 'first')
    ]),
    u('paragraph', []),
    u('paragraph', [
      u('text', ''),
      u('text', '  \n')
    ]),
    u('paragraph', [
      u('text', 'second'),
      u('text', ' '),
      u('text', 'value')
    ]),
    u('paragraph', [])
  ]);
};
