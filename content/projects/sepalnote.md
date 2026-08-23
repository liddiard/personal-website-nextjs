---
title: Sepalnote
description: Hierarchical note-taking for the web (incomplete)
year: 2015
involvement: creator
skills: Django, PostgreSQL, AngularJS, vanilla JS, user accounts, web development
link: http://www.sepalnote.com
github: liddiard/sepalnote
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

After trying tens of todo list apps, I finally landed on [Workflowy](https://workflowy.com). It has two standout features: its UI is incredibly simple to use, and it lets you organize your tasks in a hierarchy of your own design.

I wanted to bring a similar experience to note taking. Some note-taking apps like OneNote give you a hierarchy, but it’s an imposed one of notebooks, sections, and pages, which doesn’t make sense as an organization paradigm for all use cases.

Sepalnote does away with these arbitrary distinctions in favor of nestable notes. Notes can be of any length – one word or a paragraph – and they can be nested infinitely. Notes are navigated with a two-pane setup and full search functionality.

Sepalnote has a robust offline mode which utilizes HTML5 local storage to save changes without an internet connection. It uses a Django API on the backend, and the frontend is written in AngularJS. Features I will be adding shortly include note sharing, improved copy-and-paste functionality, and support for a subset of markdown.
