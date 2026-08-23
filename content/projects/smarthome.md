---
title: Smarthome
description: Personal server setup for automation and security
year: 2024
involvement: creator
skills: Linux server admin, Docker, networking
media:
  - type: image
    filename: network_diagram.png
    caption: High-level network diagram of my home server setup
  - type: image
    filename: immich_feed.png
    caption: Immich photo feed
  - type: image
    filename: home_assistant_dashboard.png
    caption: Home Assistant dashboard
  - type: image
    filename: home_assistant_thermostat.png
    caption: Time-series graph in Home Assistant showing temperature, thermostat set point, and AC operation (on/off)
  - type: image
    filename: grafana_dashboard.png
    caption: Air quality metrics in Grafana
  - type: image
    filename: pihole_admin.png
    caption: Pi-hole admin dashboard
type: software
---

I built out a home server setup that enables me to save money in several ways, block ads and trackers, and even stay cool in summer. Let me explain….

My local setup has two primary servers that host an array of containerized services:

- **pihole**: Raspberry Pi 3B running core networking:
  - **[Pi-hole](https://pi-hole.net/)**: ad blocker and DNS resolver. It essentially gives adblock to every device on the network – no browser extensions required
  - **[cloudflare-ddns](https://github.com/timothymiller/cloudflare-ddns)**: script that monitors my public IP address and updates a DNS record, providing consistent routing to my home network from the internet. Necessary for…
  - **[Wireguard](https://www.pivpn.io/)**: VPN server that facilitates secure connection to my home network from anywhere in the world
- **webserver**: Raspberry Pi 5 running web applications and their supporting services:
  - **[Home Assistant](https://www.home-assistant.io/)**: open-source home automation software that unifies smart light control, switches, and sensors into customizable dashboards
  - **[Prometheus](https://prometheus.io/)**: time-series database enabling storage, query, and export of indoor air metrics from my [AirGradient sensor](https://www.airgradient.com/documentation/diy/): temperature, humidity, particulates, CO₂
  - **[Immich](https://immich.app/)**: self-hosted photo and video management app comparable to Google Photos
  - **[Transmission](https://transmissionbt.com/)**: torrent client with a web UI (a.k.a. seedbox) secured behind a VPN

So, how does this save me money? A few examples:

**Problem:** [Google Photos](https://photos.google.com/) is super convenient with its friendly interface, machine learning-powered search, and tight integration with my phone. But I don’t want to pay Google increasingly large amounts of money throughout my life for them to store my increasingly large photo and video library.

**Solution:** [Immich](https://immich.app/) provides the same core features as Google Photos including web and mobile UIs, auto-upload from phone, shareable albums, facial recognition, and geospatial + ML-powered semantic search. But here, the only incremental cost is buying a hard drive. That 2TB drive pays for itself in a few months with Google charging $10/mo. for the [same storage on Google One](https://one.google.com/about/plans).

---

**Problem:** I want convenient local access to large files like videos, but I don’t want to pay the disproportionate markups in the range of $200–$800+ that Apple charges for storage bumps on MacBooks.

**Solution:** My network-attached storage (NAS) enables Finder-integrated access to big files on a drive in my network using the SMB file-sharing protocol. It’s the benefits of having a ton of space at your disposal without the costs of paying for more on-device storage or the clunkiness of plugging in external drives.

---

**Problem:** I want to turn off my AC while I’m not home to save energy, but I also want to turn it on before I get home so it’s already cool when I arrive. My “smart” window air conditioner wants to bill me $5/mo. to use their app to control it remotely.

**Solution:** I’ve set up an indoor air sensor that feeds metrics like temperature into Home Assistant, and I added a smart plug to my AC. With Home Assistant’s built-in [thermostat integration](https://www.home-assistant.io/integrations/generic_thermostat/), I connected the two to create a thermostat that I can control from anywhere. It’s much more accurate than the one built in to the AC unit.

I also set up location-based automations to send a notification prompting me to turn off the thermostat if I leave with it on, as well as one to turn it back on when I leave work for home.
