---
title: Stream Editor
description: Interactively use command-line text manipulation utilities
year: 2020
link: https://streameditor.io
involvement: creator
skills: React, Flask, Python, Unix, web development
github: liddiard/stream-editor
media:
  - type: image
    filename: initial.png
    caption: Stream Editor default view (dark theme)
  - type: image
    filename: unicode.png
    caption: Light theme, showcasing full Unicode support
  - type: video
    filename: log_analysis.mp4
    caption: Using Stream Editor to analyze its own logs by chaining multiple commands together
  - type: image
    filename: chain.png
    caption: The full chain of commands from the end of the above video, resulting in the final output of a report on the number of times each command has been used

type: software
---

When software developers need more powerful text manipulation capabilities than a simple find-and-replace, go-to tools are Unix utilities like `sed`, `grep`, and `awk`. They’re incredibly powerful, but they can be intimidating for newcomers and a bit unwieldy even in the hands of seasoned developers. This is especially true for complex use cases that involve chaining multiple commands together.

I created Stream Editor as an interactive web interface for writing and debugging commands using these text transformation utilities. It aims to:

<!-- Gatsby’s markdown transformer doesn’t render nested lists properly: https://github.com/gatsbyjs/gatsby/issues/10870 -->
<ul>
  <li>close the feedback loop typically associated with using these commands by providing as-you-type output</li>
  <li>increase visibility into what each command is doing by:</li>
  <ul>
    <li>higlighting diffs in green/red for added/removed text</li>
    <li>displaying the intermediate output between each command when you have multiple chained together</li>
  </ul>
  <li>provide an approachable interface to command-line text manipulation for both beginners and experienced developers that facilitates quick and easy tinkering</li>
</ul>

It has some other useful features like the ability to upload a file as input; to export a string of commands as a Bash script; to share commands you write with a unique URL; and to customize aspects of the UI like pane widths, light/dark theme, and font size.

It’s written using a lightweight Flask server on the backend and a modern (as of 2020) React UI on the frontend that fully uses function-based components with [React Hooks](https://reactjs.org/docs/hooks-intro.html).

Creating and deploying Stream Editor came with a few interesting challenges. One was the performance of the text diff algorithm that highlights added and removed text. With very large inputs and diffs, it could take a few seconds to generate the diff. This would block the UI, causing it to become momentarily unresponsive. My fix for this issue was twofold:

1. Only recalculate the diff when absolutely necessary and cache its output with the [React `useMemo` hook](https://reactjs.org/docs/hooks-reference.html#usememo).
2. Move the expensive part of the operation into a [Web Worker](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers) so it would no longer block the UI thread.

These changes decreased resource usage and eliminated the lag in the user interface.

The other huge challenge with this project was security. At its core, Stream Editor is a web interface that lets random strangers on the internet run commands on your server. That’s generally considered to be a bad idea.

To curtail this potential security threat, I configured all commands to be run by an extremely restricted user inside a [chroot jail](https://en.wikipedia.org/wiki/Chroot), which limits a user’s access at the OS level to a walled-off subdirectory. These measures, along with the precaution of not storing any sensitive information on the web server, made me reasonably confident in exposing it to the internet.
