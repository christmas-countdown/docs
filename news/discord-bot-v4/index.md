---
title: The fourth generation of the Christmas Countdown Discord bot
description: The the fourth generation of the Christmas Countdown bot for Discord is here
authors: [eartharoid]
tags: [discord]
---

The [Discord bot](https://christmascountdown.live/discord) has been rewritten every year since it was released. This year it was less due to the previous code being terrible and more about converting it to Discord's new slash commands and some small improvements.

## What has changed?

In the code, almost everything. The things you might notice:

- Slash (`/`) commands
- Your settings were reset (new database system)
- The countdown message uses a webhook now
- New `joke` command (try it!)
- New `months` command
- New `radio` command
- New `countdown` command (creates the countdown webhook)
- Removed `locales` command (now included as slash command options)
- Removed `timezones` command as the settings commands now accept more inputs and will try to guess what you mean
- `/hours`, `/minutes`, and `/seconds` outputs are more readable (formatted with commas)
- `/days` and `/sleeps` both show the other with a [link](/other/days-vs-sleeps)
