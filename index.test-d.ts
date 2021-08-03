import {expectType} from 'tsd'
import {Root, Heading, Paragraph} from 'mdast'
import {squeezeParagraphs} from './index.js'

const root: Root = {type: 'root', children: []}
const paragraph: Paragraph = {type: 'paragraph', children: []}
const heading: Heading = {type: 'heading', depth: 1, children: []}
/* eslint-disable @typescript-eslint/consistent-type-assertions */
const headingOrParagraph = {type: 'paragraph', children: []} as
  | Heading
  | Paragraph
/* eslint-enable @typescript-eslint/consistent-type-assertions */

expectType<Root>(squeezeParagraphs(root))
expectType<Paragraph | null>(squeezeParagraphs(paragraph))
expectType<Heading>(squeezeParagraphs(heading))
expectType<Heading | Paragraph | null>(squeezeParagraphs(headingOrParagraph))
