---
title: TypeEmoji LLM
description: Your AI-powered emoji assistant
year: 2025
involvement: creator
skills: Generative AI, Flask, React, CSS animations
link: https://typeemoji.com
github: liddiard/typeemoji-llm
media:
  - type: image
    filename: desktop_results.png
  - type: video
    filename: animation.mp4
    caption: Demonstration of user interaction and animations
  - type: image
    filename: mobile_results.png
    caption: Mobile web UI
type: software
---

In the last 10 years, the number of Unicode emoji has [more than doubled](https://www.statista.com/chart/17275/number-of-emojis-from-1995-bis-2019/) from around 1,500 to an eye-watering 3,790 in 2025. They’re ubiquitous in online conversation, yet our tools to find the right one to express a particular concept – let alone keep up with the new additions – remain rudimentary.

It needn’t be that way. TypeEmoji leverages the intelligence behind ChatGPT to instantly find the best emoji to represent any word, concept, or phrase you can imagine.

On the backend, TypeEmoji runs a lightweight, containerized Flask app that interfaces with the OpenAI chat API while handling input validation, caching, and rate-limiting to keep my usage costs down. It makes use of OpenAI’s [Structured Outputs](https://platform.openai.com/docs/guides/structured-outputs) format to ensure responses conform to the JSON schema I define.

I wanted to have a little fun with the frontend, playing off the trendy “[amorphous multicolor](/project/typeemoji-llm/apple_image_playground.png)” design motif to represent AI. While it may look dated quickly, it gave me an opportunity to dive into some advanced CSS features like [`@property` custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties#using_the_property_at-rule), [`@keyframes` animations](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes), [radial gradients](https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/radial-gradient), and [color blend modes](https://developer.mozilla.org/en-US/docs/Web/CSS/mix-blend-mode).

I suspect this little app is likely to get “[Sherlocked](https://www.howtogeek.com/297651/what-does-it-mean-when-a-company-sherlocks-an-app/)” because it seems like such an obvious, low-hanging feature to add to Apple Intelligence, which as of early 2025 has been off to a rather [underwhelming](https://9to5mac.com/2024/12/16/most-iphone-owners-see-little-to-no-value-in-apple-intelligence-so-far/) and [rocky](https://apnews.com/article/apple-ai-news-hallucinations-iphone-6b37a11b9cdd0e100c299e922d58b530) start.

Here’s a sampling of searches and results that underscores how much richer the AI-powered TypeEmoji is than Apple’s current emoji picker:

- query: “software development”
  - Apple: 🧑‍💻 👨‍💻 👩‍💻
  - TypeEmoji: 💻 👨‍💻 👩‍💻 🖥️ 🔧 📦 ⚙️ 🌐 🚀 🐞
- query: “triathalon”
  - Apple: (no results)
  - TypeEmoji: 🏊‍♂️ 🚴‍♂️ 🏃‍♂️ 🏅 🏆 💪 🌊 🚵‍♀️ 🥇 ⏱️
- query: “new york city”
  - Apple: 🗽
  - TypeEmoji: 🗽 🌆 🚖 🏙️ 🗺️ 🎭 🍕 🚕 ✨
- query: “martial arts”
  - Apple: 🥋
  - TypeEmoji: 🥋 🏋️‍♂️ 🥊 🧘‍♂️ 👊 ⚔️ 💪 🤼‍♂️ 🏆 🤸‍♀️
- query: “Finding Nemo”
  - Apple: (no results)
  - TypeEmoji: 🐠 🌊 🐟 🔍 🎣 🏝️ 🐳 🐬 🐙 🌅

[Try it for yourself](https://typeemoji.com/)!
