---
title: Locales
description: A list of all valid locales
---

## Discord bot

The Discord bot supports localization so the responses to your commands are in your language.

### Valid locales

The default locale is `en-GB`. The file names of each of the files in [this directory](https://github.com/eartharoid/ChristmasCountdownBot/tree/master/src/locales) are the currently supported locales.

### Don't see your language?

If your the bot hasn't been translated to your language yet, you can translate the `en-GB` file and submit a pull request on GitHub (or send it to me on [Discord](https://go.eartharoid.me/discord)/by [email](mailto:contact@eartharoid.me) if you don't have Discord).

**Please read [this](https://github.com/eartharoid/ChristmasCountdownBot/blob/master/.github/CONTRIBUTING.md#localisation)** if you want contribute by translating. Command names/aliases should not be translated.

### Setting your locale

!!! info
	This assumes you are using the default prefix.

#### Server locale

`x!sever set locale: <locale>`

#### User locale

`x!user set locale: <locale>`

Example: `x!user set locale: fr-FR`
