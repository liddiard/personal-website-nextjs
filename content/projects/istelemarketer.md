---
title: istelemarketer
description: Should you pick up the phone?
year: 2013
skills: Django, data scraping, unit testing, web development
github: liddiard/istelemarketer
media:
  - type: image
    filename: 1.png
  - type: image
    filename: 2.png
  - type: image
    filename: 3.png
type: software
---

Telemarketers are annoying. Equally annoying is seeing an unknown number appear on your phone and not having the time to determine via web search whether or not the caller was a telemarketer.

istelemarketer introduces the two missing factors in this scenario: speed and decisiveness. Just enter a phone number (it’s automatically formatted as a number – no worrying about dashes or parentheses), and within a second you’ll have an authoritative verdict.

Under the hood, istelemarketer runs a lightweight, database-free Django application that quickly scrapes a handful of caller complaint databases for your number using the Python library BeautifulSoup. If a complaint is found, istelemarketer warns you with a bright red screen and provides links to the pages where complaints were noted.

Since speed is key, there’s no time-consuming page refresh involved; everything is handled through Ajax.
