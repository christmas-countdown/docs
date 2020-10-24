# Server settings

Upon adding the bot to your server you can use `x!server setup` to enter a prompt which will ask your for a timezone and allow you to optionally set a countdown channel.

Settings can be updated with the `x!server set` command:

!!! example
	`x!server set timezone: America/New_York`
	
	`x!server set timezone: Europe/Paris locale: fr-FR`

The command takes one or more options, each option name being followed by a colon (:) and your input.

## prefix

Set the command prefix with `x!server set prefix: <prefix>`

## locale

Set the server's default language with  `x!server set locale: <locale>`

See [locales](/locales).

## timezone

Set the server's default timezone with  `x!server set timezone: <timezone>`

See [timezones](/timezones).

## channel

Set the countdown channel with with `x!server set channel: <channel>`.

`<channel>` Can be a text channel mention, name, or ID.

**You must also set `enabled` to be true to enable the countdown!**

## role

:star: This is a premium option.

Set the countdown mention role with with `x!server set role: <role>`.

`<channel>` Can be a role mention, name, or ID.

## auto

:star: This is a premium option.

Enable or disable `auto` with `x!server set auto: <boolean>`.

`<boolean>` can be:

- `on`/`off`
- `true`/`false`

## enabled

Enable or disable the countdown with `x!server set enabled: <boolean>`, or use `x!toggle`

`<boolean>` can be:

- `on`/`off`
- `true`/`false`

## mention

:star: This is a premium option.

Enable or disable `mention` with `x!server set mention: <boolean>`.

`<boolean>` can be:

- `on`/`off`
- `true`/`false`
