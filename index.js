/**
 * @typedef {import('mdast').Root|import('mdast').Content} Node
 * @typedef {import('mdast').Paragraph} Paragraph
 */

import {remove} from 'unist-util-remove'

/**
 * @template {Node} Tree
 * @param {Tree} tree
 * @returns {Tree extends Paragraph ? Tree | null : Tree}
 */
export function squeezeParagraphs(tree) {
  /**
   * @param {Node} node
   * @returns {boolean}
   */
  const filter = (node) =>
    Boolean(
      node.type === 'paragraph' &&
        node.children.every(
          (node) => node.type === 'text' && /^\s*$/.test(node.value)
        )
    )

  // @ts-expect-error: `remove` can’t narrow the above test.
  return remove(tree, {cascade: false}, filter)
}
