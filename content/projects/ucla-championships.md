---
title: UCLA Bruins championships showcase
description: 'Explore the Bruins’ history of wins'
year: 2016
link: http://uclabruins.com/championships
involvement: creator
skills: React, ES6, Sass, UI design
media:
  - type: video
    filename: 1.mp4
    caption: 'Navigation demo: filtering by year, by sport, or both'
type: software
---

The UCLA Bruins have a rich athletic history, holding the most NCAA titles of any university. Working as a web developer at UCLA Athletics, I set out to design an interactive page for exploring these over 100 titles that accommodates several use cases while remaining intuitive to navigate.

The use cases I identified, in order of priority, are:

1. Browsing championships in a specific sport
2. Browsing all championships chronologically
3. Locating information about a specific championship
4. Browsing championships in a specific year

In order to accommodate all of these use cases cleanly, I came up with a two-part radio button navigation that offers a year filter and a sport filter. Both filters are initially set to “All Years” and “All Sports,” respectively, so that all championships are displayed by default.

Clicking a year filters the list and highlights all sports in which UCLA won a championship that year, and vice versa when clicking a sport. Take a look at the accompanying video for a better visual explanation of how the navigation makes it easy to browse either by year or by sport, or to quickly locate a specific championship.

I built the web page with React because it offers a minimal framework for a small page like this while handling the quick manipulation of hundreds of DOM elements.

Championship data is pulled from a JSON file on Amazon S3 that is updatable by non-technical staff through a Google Sheet using [google-sheet-s3](https://github.com/liddiard/google-sheet-s3), a Google Sheets add-on I wrote.
