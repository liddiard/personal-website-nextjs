---
title: Driving Time Heatmap
description: See transportation times to surrounding areas in different traffic conditions
year: 2017
involvement: creator
skills: data visualization, React, Google Maps API
link: https://driving-time-map.harrisonliddiard.com
github: liddiard/driving-time-heatmap
media:
  - type: image
    filename: 1.png
  - type: image
    filename: 2.png
  - type: image
    filename: 3.png
type: software
---

Location is a huge consideration when you’re moving somewhere new. One of the most important aspects of location is driving times to surrounding areas – work, school, the bank, the grocery store – dozens of places you may visit weekly.

Unfortunately, not many good options exist to quickly visualize how much time you can expect to spend driving to surrounding areas in a single map without querying each destination individually. The best I could find is [Trulia’s commute map](http://on.trulia.com/2x1IVLW), but it’s awfully optimistic because it doesn’t account for traffic – a significant factor for driving times in most cities.

Enter Driving Time Heatmap. Leveraging Google Maps’ comprehensive traffic data, which is queryable in bulk via the [Distance Matrix API](https://developers.google.com/maps/documentation/distance-matrix), Driving Time Heatmap can generate accurate driving time estimations by accounting for traffic conditions at specific days and times.

To generate the heatmap, the application first renders a base map layer using the [Static Maps API](https://developers.google.com/maps/documentation/static-maps/). Then, it uses [geodesy](https://www.npmjs.com/package/geodesy) to create an array of more than 100 points surrounding your origin address in concentric circles. It queries the Distance Matrix API for driving time estimates from your origin point to these surrounding points at your selected time.

The application plots the results onto a color-coded map layer and overlays it using the `multiply` [`mix-blend-mode`](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode), which tints the base map while maintaining its detail, producing an informative and visually-pleasing result.

The application is entirely client side other than a [self-hosted CORS proxy](https://github.com/Rob--W/cors-anywhere). It uses React for the user interface and `localStorage` for data persistence.
