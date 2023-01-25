/**
 * @typedef {import('mdast').Root} Root
 * @typedef {import('mdast').Paragraph} Paragraph
 */

import test from 'tape'
import {u} from 'unist-builder'
import {squeezeParagraphs} from './index.js'

test((t) => {
  t.deepEqual(
    squeezeParagraphs(
      /** @type {Root} */ (
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
      )
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

  t.deepEqual(
    squeezeParagraphs(/** @type {Paragraph} */ (u('paragraph', []))),
    null,
    'should return `null` for empty paragraphs'
  )

  t.end()
})
