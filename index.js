/**
 * @typedef {import('mdast').Root|import('mdast').Content} Node
 */

import {remove} from 'unist-util-remove'

/**
 * @template {Node} T
 * @param {T} tree
 * @returns {T|null}
 */
export function squeezeParagraphs(tree) {
  return remove(tree, {cascade: false}, (node) =>
    Boolean(
      node.type === 'paragraph' &&
        node.children.every(
          (/** @type {Node} */ node) =>
            node.type === 'text' && /^\s*$/.test(node.value)
        )
    )
  )
}
