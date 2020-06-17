'use strict'

var test = require('tape')
var u = require('unist-builder')
var squeezeParagraphs = require('.')

test(function (t) {
  t.deepEqual(
    squeezeParagraphs(
      u('root', [
        u('paragraph', []),
        u('paragraph', [u('text', 'first')]),
        u('paragraph', []),
        u('paragraph', [u('text', ''), u('text', '  \n')]),
        u('paragraph', [
          u('text', 'second'),
          u('text', ' '),
          u('text', 'value')
        ]),
        u('paragraph', []),
        u('list', {ordered: false, start: null, loose: false}, [
          u('listItem', {loose: false}, [u('paragraph', [])]),
          u('listItem', {loose: false}, [
            u('paragraph', [u('text', ' '), u('text', ' ')])
          ])
        ])
      ])
    ),
    u('root', [
      u('paragraph', [u('text', 'first')]),
      u('paragraph', [u('text', 'second'), u('text', ' '), u('text', 'value')]),
      u('list', {ordered: false, start: null, loose: false}, [
        u('listItem', {loose: false}, []),
        u('listItem', {loose: false}, [])
      ])
    ])
  )
  t.end()
})
