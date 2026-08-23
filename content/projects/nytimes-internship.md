---
title: New York Times internship
description: Search optimization and typographic headline balancing
year: 2016
involvement: developer
skills: Backbone, Marionette, Elasticsearch, React, Java
link: https://open.nytimes.com/headline-balancing-act-6e92d3d6119
github: NYTimes/text-balancer
media:
  - type: image
    filename: 1.png
    caption: Immediately after clicking on the search bar, example searches appear below – one every few seconds.
  - type: image
    filename: 2.png
  - type: image
    filename: 4.png
  - type: image
    filename: 5.gif
    caption: 'The headline balancer in action. Before: Text is unevenly distributed among multiple lines. After: Text is evenly distributed with each line having a similar length. (Image from The New York Times)'
  - type: image
    filename: 6.png
    caption: Headline balancer in use on an article (Image from The New York Times)
  - type: image
    filename: 7.png
    caption: Headline balancer in use on the August 11, 2020 front page
type: software
---

I worked as a developer on the CMS team in my summer 2016 internship at The New York Times. I reimplemented the CMS’s main dashboard search, a feature used hundreds of times per day by journalists to find specific pieces of content like articles, images, and videos.

The existing search was slow and poorly formatted. Returning results could take several seconds, and the results were not very accurate.

The slowness was caused by a complex SQL query that joined several tables to search and produce a result. Our solution was to index searchable parts of the database in a denormalized document data structure with Elasticsearch and keep it up to date with the database by hooking into The Times’s internal ActiveMQ-brokered event system.

The new implementation sped up search performance 10x.

In addition to this backend work I implemented with another intern, I designed and coded a new search frontend using Backbone, Marionette, and LESS.

The old search form required a user to fill out several inputs, explicitly filtering by multiple fields to get relevant results. Results were displayed in a table that was difficult to scan quickly because information to identify an asset was spread across the screen without visual hierarchy.

I formatted the new search results in a familiar Google-style layout which emphasized a matching item’s slug – a unique, human-readable identifier that a journalist would quickly recognize. I got rid of the several form elements in favor of a single search box.

The UI displays example searches that demonstrate how to narrow a search easily by adding e.g. a relevant section or author to the query. Search results update as one types for instant feedback.

I worked with the frontend team to use our new Elasticsearch infrastructure create the beginnings of a React based, live-updating story status console where reporters and editors will be able to monitor story progress throughout the writing and editing process.

I wrote the core code for a [typographic headline balancer](https://github.com/NYTimes/text-balancer) that is now used on all NYTimes.com article pages. I implemented the balancing algorithm using binary search. After my internship ended, other developers made the balancer into an [NPM package](https://www.npmjs.com/package/text-balancer), added font load event listeners, and made the code production ready.
