---
title: UCLA Bruins Signing Day
description: Live updates for the Bruins’ Football Signing Day
year: 2016
involvement: creator
skills: Django, PostgreSQL, Memcached, React, Sass
link: http://uclabruins.com/signingday
media:
  - type: image
    filename: players_wide.png
  - type: image
    filename: video_player.png
  - type: image
    filename: card_detail.png
    caption: Card detail.
  - type: video
    filename: card_flip.mp4
    caption: 'UI affordances for card flip on hover: subtle card rotation and drop shadow, changed cursor, tooltip'
  - type: image
    filename: admin_top.png
    caption: Admin interface for adding and managing signees
  - type: image
    filename: admin_bottom.png
type: software
---

UCLA Athletics hosts a page for Football’s National Signing Day where it officially announces new players as they sign with UCLA each year. Previous years’ pages involved a cumbersome process of manually editing HTML and re-saving the page after each recruit’s announcement. This method was was time consuming and error prone.

For the UCLA’s 2015, 2016, and 2017 National Signing Day pages, I proposed and implemented a more user-friendly system involving a Django web application with an admin interface and an API. The Athletic Communications department could pre-fill information about players who were likely to sign and announce a signing by simply clicking a checkbox. The front-end was a React app that pulled from the API in real time.

Anticipating a huge volume of traffic, I chose to deploy the backend application on a scalable DigitalOcean droplet, implemented caching with Memcached, and did load testing with Load Impact. The API server held up to the high demand of hundreds of requests per second throughout the day.

For the UI, I put extra emphasis on affordances make the page’s functions intuitive. The list of signed players used cards with a front and a back. The front contained the most important information and the back contained a biography and additional stats. Because a two-sided card isn’t a typical UI paradigm on the web, I added several clues to make this feature clear.

On desktop, hovering over the card causes it to “lift up” with a drop shadow and slight rotation to indicate it can be flipped, along with a tooltip that explains the feature explicity. On desktop and mobile, an “About” button also sticks out with a yellow secondary color and a rotation symbol to indicate it will flip the card.
