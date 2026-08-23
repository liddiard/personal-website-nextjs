---
title: monitor404
description: Simple 404 error monitoring for your website
year: 2014
involvement: creator
skills: Django, PostgreSQL, distributed task queueing, payment processing, cron, user accounts, SSL, web development
github: liddiard/monitor404
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

Monitoring HTTP 404 errors is a critical part of most content-based websites. Unfortunately, configuring logging and notification for these errors is not always straightforward. Configurations are backend-dependent, which means the setup process is different for WordPress, Rails, Node.js, etc.

monitor404 eliminates this time-consuming process with a much simpler setup: 1) add your site to the monitor404 dashboard, and 2) include the monitor404.js script on your website.

In under a minute, your site is set up for detailed logging and customizable notification of 404 errors.

The service works by sending an Ajax request to a monitor404 server whenever a user clicks on a link. The server adds the link to an asynchronous queue using [Celery](http://www.celeryproject.org/). The queue quickly processes links by checking a cache. If the link is not in cache, it issues a HEAD request to the URL and checks the status code. If the status code is 404, it logs the error and sends a notification email.

monitor404 works over SSL and accepts payments for premium plans with [Stripe](https://stripe.com/). monitor404’s implementation allows it to identify broken links to external sites, a huge asset to any website that frequently uses offsite links, like news sites and wikis.
