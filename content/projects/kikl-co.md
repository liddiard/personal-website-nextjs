---
title: kikl.co
description: The link shortener for easy to type and remember URLs
year: 2024
involvement: creator
skills: Django, SQL, Vue.js, Tailwind CSS
link: https://kikl.co
github: liddiard/kikl
media:
  - type: image
    filename: initial.png
  - type: image
    filename: with_links.png
type: software
---

Sometimes you just need to get a link from one place to another, and the most convenient method of transport is your memory. Links like `http://bit.ly/1loNbfX/` are short, but they’re very impractical to remember.

Instead of random number-and-letter links, kikl.co creates fun and memorable URLs like `kikl.co/fat-walrus`, perfect for remembering, sharing by word of mouth, and typing easily.

Links are automatically generated and short-lived by design; they last between 24 hours and 7 days. This allows kikl.co to keep reusing really short and memorable URLs without tying `fat-walrus` to a single URL forever.

The app contains some involved SQL queries [like this one](https://github.com/liddiard/kikl/blob/ce4204ff93964424e4186c96065bd38ffc1ac3e5/shortener/views.py#L172) to efficiently select random words while maintaining unique adjective-noun combinations for active links.

I originally built kikl.co in 2014 with a jQuery frontend. In 2024, I [significantly refactored the app](https://github.com/liddiard/kikl/pull/9) to simplify the code, improve the API, and update to a modern frontend stack using Vue.js and Tailwind CSS.
