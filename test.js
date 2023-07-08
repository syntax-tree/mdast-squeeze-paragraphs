import assert from 'node:assert/strict'
import test from 'node:test'
import {u} from 'unist-builder'
import {squeezeParagraphs} from './index.js'

test('squeezeParagraphs', async function (t) {
  await t.test('should work on a tree', async function () {
    const tree = u('root', [
      u('paragraph', []),
      u('paragraph', [u('text', 'first')]),
      u('paragraph', []),
      u('paragraph', [u('text', ''), u('text', '  \n')]),
      u('paragraph', [u('text', 'second'), u('text', ' '), u('text', 'value')]),
      u('paragraph', []),
      u('list', {ordered: false, start: null, loose: false}, [
        u('listItem', {loose: false}, [u('paragraph', [])]),
        u('listItem', {loose: false}, [
          u('paragraph', [u('text', ' '), u('text', ' ')])
        ])
      ])
    ])

    assert.deepEqual(
      squeezeParagraphs(tree),
      u('root', [
        u('paragraph', [u('text', 'first')]),
        u('paragraph', [
          u('text', 'second'),
          u('text', ' '),
          u('text', 'value')
        ]),
        u('list', {ordered: false, start: null, loose: false}, [
          u('listItem', {loose: false}, []),
          u('listItem', {loose: false}, [])
        ])
      ])
    )
  })

  await t.test('should return `null` for empty paragraphs', async function () {
    const tree = u('paragraph', [])

    assert.deepEqual(squeezeParagraphs(tree), null)
  })
})
