---
title: GIFdatabase
description: Crowdsourced animated GIF search
year: 2013
involvement: creator
skills: Django, PostgreSQL, image processing, user accounts, Amazon S3, caching, jQuery, web development
github: liddiard/gifdatabase
media:
  - type: image
    filename: 1.png
  - type: image
    filename: 2.png
  - type: image
    filename: 3.png
  - type: image
    filename: 4.png
type: software
---

GIFdatabase is a community-driven animated GIF search. It provides a comprehensive GIF adding, tagging, voting, favoriting, and flagging system that encourages quality content and automatically restricts users who have low reputation.

Database design was a huge consideration of GIFdatabase, and as my most complicated database design to date, I spent a good two weeks figuring out how all the models should be defined and how they should interact. Some considerations included preventing duplicate tags, altering permissions of users with low reputation, and automatically deleting tags voted “bad”.

The search algorithm takes into account synonyms, common words, and duplicate words, and it returns results ordered by relevance.

With help from django-taggit, GIFdatabase recommends new GIFs based on GIFs you’ve tagged or added. GIFdatabase utilizes Django’s caching framework to cut down on page load times for frequent queries like _Just added_ and _Most popular_.

Using PIL (Python Imaging Library), GIFdatabase checks that the GIF you’re adding is animated and generates a thumbnail. The thumbnail is then uploaded to S3 using Boto, Amazon’s S3 API for Python.

An implementation of django-registration with some custom functionality handles user account creation with verification email, password recovery/changing, and account deletion.

On the front end, the lightbox plugin is a fork of slimbox2, to which I added a host of additional functionality for GIF tagging, flagging, and starring.
