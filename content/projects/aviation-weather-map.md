---
title: Aviation Weather Map
description: Visualize flight conditions with hardware & software
year: 2019
involvement: contributor / creator
skills: Python, animation, hardware
github: liddiard/aviation-weather-map
media:
  - type: image
    filename: ifr_morning.jpg
    caption: A typical Bay Area fall or winter morning with clouds and fog along the coast
  - type: video
    filename: wind_animation.mp4
    caption: Wind animation, from strong gusts at SFO to calmer conditions elsewhere
  - type: image
    filename: monterey_detail.jpg
type: software
---

As a private pilot, it’s important to know the weather conditions before taking to the skies. In particular, strong winds and low visibility can be hazardous to flying. There’s a standard way to represent visibility and cloud ceilings on aviation maps: Green represents good, VFR (Visual Flight Rules) conditions, while blue, red, and magenta represent progressively poorer weather.

Normally you’d check a website for this information, but what’s more fun and easy to check than a physical chart with LEDs representing flight conditions at nearby airports?

Inspired by and building off the great build instructions and open source software from [Philip Rueker’s blog post](https://slingtsi.rueker.com/making-a-led-powered-metar-map-for-your-wall/), I created my own version using a printed chart, individually-addressable RGB LEDs, and a Raspberry Pi.

I rewrote Philip’s code with an event loop to support user-initiated actions and to dynamically adjust LED brightness based on ambient light detected by a photoresistor. I also added a wind animation to oscillate the LEDs’ brightness. It uses a cosine function with randomly varied amplitude and frequency based on wind speeds, and a basic probabilistic state machine for wind gusts to simulate the manner in which a candle’s flame flickers in the wind.

The result is a useful map and a cool conversation piece at which I can glance to instantly get a sense of winds, visibility, and cloud ceilings at airports in the Bay Area and its surroundings.
