import {remove} from 'unist-util-remove'

export function squeezeParagraphs(tree) {
  return remove(tree, {cascade: false}, isEmptyParagraph)
}

// Whether paragraph is empty or composed only of whitespace.
function isEmptyParagraph(node) {
  return (
    node.type === 'paragraph' &&
    node.children.every(
      (node) => node.type === 'text' && /^\s*$/.test(node.value)
    )
  )
}
