---
title: Commands
description: A list of commands with useful information and usage examples.
---

Listed in alphabetical order. Commands use the user's locale if one is set, and otherwise use the server's locale (default is `en-GB`). Similarly, commands in the [Christmas](#christmas) category use the user's timezone if one is set, and otherwise use the server's timezone (default is `UTC`).

In most cases, hyphens in command names/aliases can be omitted (eg: `total-days` -> `totaldays`), and spaces for sub commands can also be omitted (eg: `server set` -> `serverset`). It works with or without.

If you make a mistake when typing a command, instead of re-typing it, you can edit your previous message and the bot will respond to the new message content.

Using `x!help [command]` will give you information about a command. Some commands have examples as part of the additional information.

## Christmas

### days

Get the number of days left until Christmas, in the user's or server's timezone.

See [days vs sleeps](/days-vs-sleeps) for distinction between days and sleeps.

|Premium?|Aliases|Usage|
|---|---|---|
|no|`days`, `total-days`, `days-left`|`days`|

### hours

Get the number of hours left until Christmas, in the user's or server's timezone.

|Premium?|Aliases|Usage|
|---|---|---|
|no|`hours`, `total-hours`, `hours-left`|`hours`|

### minutes

Get the number of minutes left until Christmas, in the user's or server's timezone.

|Premium?|Aliases|Usage|
|---|---|---|
|no|`minutes`, `total-minutes`, `minutes-left`|`minutes`|

### seconds

Get the number of seconds left until Christmas, in the user's or server's timezone.

|Premium?|Aliases|Usage|
|---|---|---|
|no|`seconds`, `total-seconds`, `seconds-left`|`seconds`|

### sleeps

Get the number of sleeps left until Christmas, in the user's or server's timezone.

See [days vs sleeps](/days-vs-sleeps) for distinction between days and sleeps.

|Premium?|Aliases|Usage|
|---|---|---|
|no|`sleeps`, `total-sleeps`, `sleeps-left`|`sleeps`|

### weeks

Get the number of weeks left until Christmas, in the user's or server's timezone.

|Premium?|Aliases|Usage|
|---|---|---|
|no|`weeks`, `total-weeks`, `weeks-left`|`weeks`|

## General

### info

Show information about the bot.

|Premium?|Aliases|Usage|
|---|---|---|
|no|`info`, `about`|`info`|

### help

Show the help menu.

|Premium?|Aliases|Usage|
|---|---|---|
|no|`help`, `commands`, `command`|`help [command]`|

### invite

Add the bot to your own server.

|Premium?|Aliases|Usage|
|---|---|---|
|no|`invite`, `add`|`invite`|

### ping

Show bot ping and shard information.

|Premium?|Aliases|Usage|
|---|---|---|
|no|`ping`|`ping`|

### premium

Get premium by donating.

|Premium?|Aliases|Usage|
|---|---|---|
|no|`premium`, `donate`|`premium`|

## Settings

### locales

List all valid locales.

|Premium?|Aliases|Usage|
|---|---|---|
|no|`locales`, `languages`|[`locales`](/locales)|

### server

Modify server settings.

|Premium?|Aliases|Usage|Required permissions|
|---|---|---|---|
|no|`server`|[`server <command> [args]`](../settings/server)|`MANAGE_GUILD`|

#### server setup

Set the basic server settings using the setup prompt. See [server settings](../settings/server) for more information.

|Premium?|Aliases|Usage|Required permissions|
|---|---|---|---|
|no|`server setup`|[`server setup`](../settings/server)|`MANAGE_GUILD`|

#### server set

Set your server settings. See [server settings](../settings/server) for more information.

|Premium?|Aliases|Usage|Required permissions|
|---|---|---|---|
|no|`server set`|[`server set <options>`](../settings/server)|`MANAGE_GUILD`|

__**Examples:**__

- `server set timezone: America/New_York prefix: xmas!`
- `server set locale: fr-FR timezone: Europe/Paris`
- `server set channel: #countdown`

#### server reset

Reset your server settings to the default.

|Premium?|Aliases|Usage|Required permissions|
|---|---|---|---|
|no|`server reset`|`server reset`|`MANAGE_GUILD`|

### timezones

List timezones by country code.

|Premium?|Aliases|Usage|
|---|---|---|
|no|`timezones`, `zones`|[`timezones [country]`](/timezones)|

__**Examples:**__

- `timezones US`
- `timezones DE`
- `zones RU`

### toggle

Toggle the countdown on/off. The same as changing the `enabled` server setting.

|Premium?|Aliases|Usage|Required permissions|
|---|---|---|---|
|no|`toggle`|`toggle`|`MANAGE_GUILD`|

### user

Modify your personal settings.

|Premium?|Aliases|Usage|
|---|---|---|
|no|`user`|[`user <command> [args]`](../settings/user)|

#### user set

Set your personal settings. See [user settings](../settings/user) for more information.

|Premium?|Aliases|Usage|
|---|---|---|
|no|`user set`|[`user set <options>`](../settings/user)|

__**Examples:**__

- `server set timezone: America/New_York prefix: xmas!`
- `server set locale: fr-FR timezone: Europe/Paris`
- `server set locale: de-DE`

#### user reset

Reset your personal settings to the default (removes you from the database).

|Premium?|Aliases|Usage|
|---|---|---|
|no|`user reset`|`user reset`|
