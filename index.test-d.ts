import type {Root, Heading, Paragraph} from 'mdast'
import {expectType} from 'tsd'
import {squeezeParagraphs} from './index.js'

const root: Root = {type: 'root', children: []}
const paragraph: Paragraph = {type: 'paragraph', children: []}
const heading: Heading = {type: 'heading', depth: 1, children: []}
const headingOrParagraph = {type: 'paragraph', children: []} as
  | Heading
  | Paragraph

expectType<Root>(squeezeParagraphs(root))
expectType<Paragraph | null>(squeezeParagraphs(paragraph))
expectType<Heading>(squeezeParagraphs(heading))
expectType<Heading | Paragraph | null>(squeezeParagraphs(headingOrParagraph))
