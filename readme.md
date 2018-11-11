# mdast-squeeze-paragraphs [![Build][build-badge]][build] [![Coverage][coverage-badge]][coverage] [![Downloads][downloads-badge]][downloads] [![Chat][chat-badge]][chat]

Remove empty paragraphs from [**mdast**][mdast] syntax trees.

Paragraphs are considered empty if they do not contain non-whitespace
characters.

## Installation

[npm][]:

```bash
npm install mdast-squeeze-paragraphs
```

## Usage

```js
var u = require('unist-builder')
var squeezeParagraphs = require('mdast-squeeze-paragraphs')

var tree = u('root', [
  u('paragraph', []),
  u('paragraph', [u('text', 'Alpha')]),
  u('paragraph', [u('text', ' ')])
])

squeezeParagraphs(tree)

console.dir(tree, {depth: null})
```

Yields:

```js
{ type: 'root',
  children:
   [ { type: 'paragraph',
       children: [ { type: 'text', value: 'Alpha' } ] } ] }
```

## API

### `squeezeParagraphs(tree)`

Modifies tree in-place.  Returns `tree`.

## Related

*   [`remark-squeeze-paragraphs`][squeeze-paragraphs]
    — [**remark**][remark] plugin wrapper

## Contribute

See [`contributing.md` in `syntax-tree/mdast`][contributing] for ways to get
started.

This organisation has a [Code of Conduct][coc].  By interacting with this
repository, organisation, or community you agree to abide by its terms.

## License

[MIT][license] © Eugene Sharygin

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/syntax-tree/mdast-squeeze-paragraphs.svg

[build]: https://travis-ci.org/syntax-tree/mdast-squeeze-paragraphs

[coverage-badge]: https://img.shields.io/codecov/c/github/syntax-tree/mdast-squeeze-paragraphs.svg

[coverage]: https://codecov.io/github/syntax-tree/mdast-squeeze-paragraphs

[downloads-badge]: https://img.shields.io/npm/dm/mdast-squeeze-paragraphs.svg

[downloads]: https://www.npmjs.com/package/mdast-squeeze-paragraphs

[chat-badge]: https://img.shields.io/badge/join%20the%20community-on%20spectrum-7b16ff.svg

[chat]: https://spectrum.chat/unified/remark

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[contributing]: https://github.com/syntax-tree/mdast/blob/master/contributing.md

[coc]: https://github.com/syntax-tree/mdast/blob/master/code-of-conduct.md

[mdast]: https://github.com/syntax-tree/mdast

[remark]: https://github.com/remarkjs/remark

[squeeze-paragraphs]: https://github.com/remarkjs/remark-squeeze-paragraphs
