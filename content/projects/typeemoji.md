---
title: TypeEmoji
description: The no-nonsense emoji search keyboard
year: 2016
involvement: creator
skills: React, ECMAScript 6, Sass, Amazon S3
github: liddiard/type-emoji
media:
  - type: image
    filename: 1.png
  - type: image
    filename: 2.png
  - type: image
    filename: 3.png
  - type: image
    filename: 4.png
type: software
---

_2025 update: I’ve developed a [newer version of TypeEmoji here](/project/typeemoji-llm/)!_

Unicode emoji are all the rage these days – they’re great for adding expression and flair to an online conversation, and they’re supported almost everywhere. The hardest part of using them is finding the right one.

Plenty of websites exist for searching emoji, but they’re most click farms that require annoying jumps between pages to get to the character you want to use. Software like macOS and Slack have forms of emoji searching built in, but they’re reliant on searching only the text in the emoji description.

I created TypeEmoji to make it easier to find the emoji you want quickly. It’s a responsive, single-page React application with real-time emoji search. It searches not only on the official character descriptions, but also on additional annotation (“tag”) keywords provided by the Unicode Consortium. It orders search results by relevance.

I obtained the emoji data by parsing the [official emoji page from unicode.org](http://unicode.org/emoji/charts/full-emoji-list.html) with [cheerio](https://github.com/cheeriojs/cheerio) on Node.js.

Despite its simple interface, this application has some subtle features that make it work well, like only performing a search if there is significant duration between keystrokes to improve browser responsiveness, auto-selection of emoji on hover for copying, a highlight to confirm an emoji was copied to clipboard, and keystroke interception to ensure that typing always goes in the search input.
