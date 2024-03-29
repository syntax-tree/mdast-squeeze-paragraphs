import assert from 'node:assert/strict'
import test from 'node:test'
import {squeezeParagraphs} from 'mdast-squeeze-paragraphs'
import {u} from 'unist-builder'

test('squeezeParagraphs', async function (t) {
  await t.test('should expose the public api', async function () {
    assert.deepEqual(
      Object.keys(await import('mdast-squeeze-paragraphs')).sort(),
      ['squeezeParagraphs']
    )
  })

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

    squeezeParagraphs(tree)

    assert.deepEqual(
      tree,
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

  await t.test(
    'should do nothing with a (empty or not) paragraph',
    async function () {
      const tree = u('paragraph', [])

      squeezeParagraphs(tree)

      assert.deepEqual(tree, u('paragraph', []))
    }
  )
})
