# Days vs sleeps

:::note TL;DR
**The number of sleeps left is always one more than the number of days** as it is rounded up instead of down.
:::

The Christmas Countdown projects give two values for the number of days left until Christmas:

- `days left` - rounded down
- `sleeps left` - rounded up

Both numbers are correct but in different circumstances.

For example, if you are saying "there are *d* days and *h* hours left", **the rounded down value (`days`)** would be correct.

However, if you just want the number of days left until Christmas, it makes more sense to **use the value that is rounded up (`sleeps`)**.
This way there will be 1 sleep left on Christmas Eve, instead of saying 0 days.

:::tip
**The number of sleeps left *is* the number of days left, but rounded up.**
It is just a different name to avoid confusion between the two numbers.
:::

The [*Christmas Countdown bot for Discord*](/discord/introduction)'s countdown feature gives the number of **sleeps** left as the message is sent early in the morning at the start of each day. Using the rounded down value would ignore what is left of today, which is the majority of the day.

## Technical explanation

The number of days and sleeps left are both calculated by dividing the number of seconds until Christmas by the number of seconds in one day. This gives a floating point number which is then rounded up or down to give sleeps or days.

### Calculations

Here's an example:

<iframe width="100%" height="300" src="//jsfiddle.net/eartharoid/svjygb4f/61/embedded/result/dark/" allowfullscreen="allowfullscreen" allowpaymentrequest frameborder="0"></iframe>
