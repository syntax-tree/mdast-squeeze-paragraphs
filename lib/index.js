/**
 * @typedef {import('mdast').Nodes} Nodes
 * @typedef {import('mdast').Paragraph} Paragraph
 */

import {visit} from 'unist-util-visit'

/**
 * Remove empty paragraphs in `tree`.
 *
 * @template {Nodes} Tree
 *   Node type.
 * @param {Tree} tree
 *   Tree to change.
 * @returns {Tree extends Paragraph ? Tree | null : Tree}
 *   Changed `tree`, or `null` if it was an empty paragraph.
 */
export function squeezeParagraphs(tree) {
  if (emptyParagraph(tree)) {
    // @ts-expect-error: it’s an empty paragraph.
    return null
  }

  visit(tree, function (node, index, parent) {
    if (index !== undefined && parent && emptyParagraph(node)) {
      parent.children.splice(index, 1)
      return index
    }
  })

  // @ts-expect-error: it’s not an empty paragraph.
  return tree
}

/**
 * Check if a node is an empty paragraph.
 *
 * @param {Nodes} node
 *   Node to check.
 * @returns {boolean}
 *   Whether `node` was an empty paragraph.
 */
function emptyParagraph(node) {
  return (
    node.type === 'paragraph' &&
    node.children.every(function (child) {
      return child.type === 'text' && /^\s*$/.test(child.value)
    })
  )
}
