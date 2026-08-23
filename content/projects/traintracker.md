---
title: TrainTracker
description: Live tracking North American intercity passenger rail
year: 2026
involvement: creator
skills: Next.js, TypeScript, Web Push, mapping & geospatial analysis
link: https://traintracker.app
github: liddiard/traintracker
media:
  - type: image
    filename: main.png
    caption: TrainTracker’s default view
  - type: image
    filename: train-detail-amtrak.png
    caption: Amtrak train detail
  - type: image
    filename: train-detail-via.png
    caption: VIA Rail train detail, showing dark mode with metric units and 24-hour time
  - type: image
    filename: station-detail.png
    caption: Station detail view, showing a 3D map style
  - type: video
    filename: 3d-animation.mp4
    caption: Buttery-smooth animation through lots of caching and optimizations
type: software
---

Living in New York, Amtrak is often a competitive alternative to flying or driving around the Northeast Corridor. But as someone who likes to track the progress of my transit, I found the options lacking.

Google Maps will offer Amtrak for transit routing, but it doesn’t actually let you see where trains are, or to track someone else’s train. It also doesn’t communicate delays well as they accumulate or improve along a journey. Amtrak’s [official tracker page](https://www.amtrak.com/track-your-train) is pretty rough (just try to zoom on desktop or pan on mobile), and unofficial sites like [RailRat](https://railrat.net/) are functional but don’t have the most user-friendly design.

Enter [TrainTracker](https://traintracker.app/), a modern app with a snappy map, easy train search, clear progress visualization, and push notifications. It supports [Amtrak](https://www.amtrak.com/home), [VIA Rail](https://www.viarail.ca), and [Brightline](https://www.gobrightline.com/). The basic idea was something like “[Flightradar24](https://www.flightradar24.com) for trains.” It prioritizes sound design and user experience.

Powering it on the backend is much data-wrangling from official and unofficial sources for rail track and station data. Live train updates required decrypting Amtrak’s obfuscated API and parsing its frankly insane response structure into a [clean API](https://traintracker.app/api/trains) (shout-out to Greg Walker for [reverse-engineering the decryption process](https://suddenlygreg.com/blog/2023-11-02-amtrak-api/)). VIA Rail and Brightline data is mercifully a bit more straightforward.

For the map, I used [MapLibre GL JS](https://maplibre.org/projects/gl-js/) with vector tiles from [OpenFreeMap](https://openfreemap.org/). The map shows estimated real-time train positions using a combination of GPS location and timetables. This required some [pretty involved code](https://github.com/liddiard/traintracker/blob/main/app/components/Map/calc.ts) using [Turf.js](https://turfjs.org/) to “snap” a train’s position and heading on the appropriate track and smoothly animate it.

I employed several performance optimizations to make this responsive, including caching, culling elements outside the viewport, and leaning on CSS transitions to create smooth animations between JavaScript-calculated updates.

This was also my first experience with the web [Push API](https://developer.mozilla.org/en-US/docs/Web/API/Push_API), which enables users to receive push notifications when a train arrives at or departs a particular station. Push subscriptions are stored in a SQLite database managed through Prisma.

For TrainTracker on mobile, I wanted a bottom sheet pattern similar to Google Maps, where a sheet with info about a train or station appears over the map and can “snap” fully open, halfway open, or closed. To achieve this, I wrapped [react-modal-sheet](https://github.com/Temzasse/react-modal-sheet) and [modified it](https://github.com/liddiard/traintracker/blob/main/app/components/BottomSheet.tsx) so a swipe gesture contextually switches between dragging the sheet vs. scrolling the content within the sheet in an intuitive way.

TrainTracker gives North American rail enthusiasts and commuters a better way to manage their journeys.
