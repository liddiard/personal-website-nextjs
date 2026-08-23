---
title: prime
description: Quarterly lifestyle magazine
year: 2013
involvement: website creator
skills: Django, PostgreSQL, parsing, content management, web development
link: http://graphics.dailybruin.com/prime
github: daily-bruin/appletini
media:
  - type: image
    filename: 1.png
  - type: image
    filename: 2.png
  - type: image
    filename: 3.png
  - type: image
    filename: 4.png
  - type: image
    filename: 5.png
type: software
---

_prime_ is a quarterly lifestyle magazine produced by the _Daily Bruin_. For the Fall 2013 issue, I wanted to create a website that would showcase the rich visual elements of the magazine and be expandable for future issues.

I created a Django-based site that allows for creation of new issues, automatically archiving old ones. I structured the project so that additional "apps" can be added, sharing the same author model that _prime_ utilizes.

Articles on the backend use markdown, along with a custom shortcode parser I wrote for images. The shortcodes allow easy positioning of photos (full width, left, or right). Additional photo data (captions and authors) are stored in an image model, keeping the data storage modular and the markup clean.
