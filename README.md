# Unblock

[![github issues][github-issues-image]][github-issues-url]

Use this.unblock inside Meteor Publications. This is a project to provide `this.unblock` functionality to publications.
`this.unblock` inside publications is one of most(may be a little bit less) [requested](https://github.com/meteor/meteor/issues/853) feature and but it hasn't been implemented yet!

Fork from [lamhieu-vk/unblock](https://github.com/lamhieu-vk/unblock). If you find an error, please open the issue in this project!

## Why unblock?

Meteor executes, DDP messages for a single client in a sequence. So, if one message takes a lot of time to process, that time will add up to all the messages. Luckily, there is an API called `this.unblock` which can be use inside methods as shown below.

```javascript
Meteor.methods({
  longMethod: function() {
    this.unblock();
    Meteor._sleepForMs(1000 * 60 * 60);
  },
});
```

So, other messages can start processing without waiting for the above method.

**Unfortunately**, this is not available for Publications (subscriptions) for no reason. But now you can possible it with this project.

## Installation

read more in [atmospherejs](https://atmospherejs.com/dxrx/unblock)

```bash
$ meteor add dxrx:unblock
```

Use it inside your publications, if that takes too much time or you don't need subscriptions from other publications to wait on this.

```javascript
Meteor.publish("publicationName", function() {
  this.unblock(); // yeah!
  Meteor._sleepForMs(1000 * 60 * 60);
});
```

[github-project-url]: https://github.com/dxrx/unblock
[github-issues-url]: https://github.com/dxrx/unblock/issues
