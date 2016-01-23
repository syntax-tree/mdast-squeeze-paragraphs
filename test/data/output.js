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
    ]),
    u('list', {
      ordered: false,
      start: null,
      loose: false
    }, [
      u('listItem', { loose: false }, []),
      u('listItem', { loose: false }, [])
    ])
  ]);
};
