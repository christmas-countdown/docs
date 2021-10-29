# Commands

:::tip
  **Need help?** [Join the Discord support server](https://go.eartharoid.me/discord).
:::

The available commands are shown in this screenshot of the `help` command.

![`help` command output](https://static.eartharoid.me/sharex/21/10/bot-help-cmd.png)

## Christmas

### `days`

|Description|
|-|
|Get the number of days left until Christmas in your timezone|

### `hours`

|Description|
|-|
|Get the number of hours left until Christmas in your timezone|

### `joke`

|Requires vote?|Description|
|-|-|
|yes|get|

### `minutes`

|Description|
|-|
|Get the number of minutes left until Christmas in your timezone|


### `months`

|Description|
|-|
|Get the number of months left until Christmas in your timezone|


### `radio`

|Description|
|-|
|Get a link to the Christmas Radio bot|

### `seconds`

|Description|
|-|
|Get the number of seconds left until Christmas in your timezone|

### `sleeps`

|Description|
|-|
|Get the number of sleeps left until Christmas in your timezone|

### `total`

|Description|
|-|
|Get the total time left until Christmas in your timezone|

### `weekday`

|Description|
|-|
|Get the day of the week that Christmas Day is on|

### `weeks`

|Description|
|-|
|Get the number of weeks left until Christmas in your timezone|

## General

## `donate`

|Description|
|-|
|Donate to unlock premium features|

### `help`

|Description|
|-|
|List the available commands|

### `info`

|Description|
|-|
|Get information and statistics about the bot (links to stats dashboard)|

### `invite`

|Description|
|-|
|Add the bot to your own Discord server|

### `ping`

|Description|
|-|
|Get connection information|

## Settings

### `countdown`

|Permissions|Description|
|-|-|
|`MANAGE_GUILD`|Create the countdown webhook|

#### Options

|Name|Type|Required?|Example|Description|
|-|-|-|-|-|
|`channel`|Channel|no|`#countdown`|The channel to create the webhook in - defaults to current channel|

### `server`

#### `set`

|Permissions|Description|
|-|-|
|`MANAGE_GUILD`|Update your server's settings|

#### Options

|Name|Type|Required?|Example|Description|
|-|-|-|-|-|
|`auto_toggle`|Boolean|no|`False`|**Premium only** - Automatically toggle the countdown on/off at the start and end of December?|
|`enabled`|Boolean|no|`True`|Enable the countdown? (Use [`/toggle`](#toggle) shortcut)|
|`locale`|String|no|`es-ES`|The locale (language) for the server|
|`mention`|Role|no|`@Christmas`|**Premium only** - The role to mention with the countdown message every morning|
|`timezone`|String|no|`EST`|The [timezone](./timezones) for the server|

#### `reset`

|Permissions|Description|
|-|-|
|`MANAGE_GUILD`|Reset your server's settings|

#### `view`

|Permissions|Description|
|-|-|
|`MANAGE_GUILD`|View your server's settings|

### `toggle`

|Permissions|Description|
|-|-|
|`MANAGE_GUILD`|Toggle the countdown on/off (same as `enabled` server setting)|

### `user`

#### `set`

|Description|
|-|
|Update your personal settings|

#### Options

|Name|Type|Required?|Example|Description|
|-|-|-|-|-|
|`locale`|String|no|`es-ES`|Your locale (language)|
|`timezone`|String|no|`EST`|Your [timezone](./timezones)|

#### `reset`

|Description|
|-|
|Reset your personal settings|

#### `view`

|Description|
|-|
|View your personal settings|