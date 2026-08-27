---
title: Harmontown Search
description: Search 6+ million words spoken in the cult-favorite comedy podcast
year: 2023
link: https://harmonsearch.com
linkConfirmation: >
  Just a heads up: This podcast contains explicit content. You won’t find it on the homepage, but you will if you search for it and possibly unintentionally while browsing. Continue?
involvement: creator
skills: Next.js, TypeScript, React, full-text search, Python
github: liddiard/harmontown-search
media:
  - type: image
    filename: search_robin_williams.png
  - type: image
    filename: harmontownunder.png
  - type: image
    filename: cliffhanger.png
type: software
---

[_Harmontown_](https://en.wikipedia.org/wiki/Harmontown) was a comedy podcast hosted by writer Dan Harmon. Like his TV creations [_Community_](<https://en.wikipedia.org/wiki/Community_(TV_series)>) and [_Rick and Morty_](https://en.wikipedia.org/wiki/Rick_and_Morty), the recorded weekly live show amassed a loyal fanbase through its run from 2012–2019. Even in 2023, it remains a relisten favorite among fans for its unique blend of improv comedy, industry insider talk, off-the-wall topics, and iconic guests.

With ongoing demand for a way to search the podcast for specific moments and topics, I decided to build Harmontown Search.

First, I wrote a suite of Python utilities to download and transcribe episodes using OpenAI’s [Whisper speech recognition model](https://github.com/openai/whisper), then correct the resulting documents for common mistranscriptions.

With over 6 million words across nearly 15,000 minutes of dialogue, the next challenge was search. I landed on open-source [Typesense](https://typesense.org/) as a search engine with the right blend of performance and feature set.

Finally, I built the UI to tie it all together on a modern stack using Next.js with TypeScript. The web application enables users to search every episode in a fraction of a second and directly jump into playing the podcast at specific moments.

The media player features a scrolling transcript that’s synced with audio/video playback, which I accomplished performantly using binary search. It also allows sharing links to exact timecodes and uses browser local storage to pick up episode playback where you left off.

The Typesense server is hosted on Google Compute Engine. The frontend is static-exported from Next.js and hosted on Amazon S3 with Cloudflare CDN caching for speedy load times.

Harmontown Search finally gives fans an accessible way to navigate and relive moments from the vast archives of one of the 2010s’ best podcasts.
