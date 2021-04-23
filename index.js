/**
 * @typedef {import('unist').Node} Node
 * @typedef {import('unist-util-remove').TestFunctionAnything} TestFunction
 */

import {remove} from 'unist-util-remove'

/**
 * @template {Node} T
 * @param {T} tree
 * @returns {T}
 */
export function squeezeParagraphs(tree) {
  return remove(tree, {cascade: false}, isEmptyParagraph)
}

/**
 * Whether paragraph is empty or composed only of whitespace.
 *
 * @type {TestFunction}
 */
function isEmptyParagraph(node) {
  return (
    node.type === 'paragraph' &&
    // @ts-ignore paragraphs are parents.
    node.children.every(
      (/** @type {Node} */ node) =>
        // @ts-ignore texts are literals.
        node.type === 'text' && /^\s*$/.test(node.value)
    )
  )
}
