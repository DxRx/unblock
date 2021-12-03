Package.describe({
  summary: "A utils to unblock subscriptions, a this.unblock inside for Meteor Publications",
  version: "1.0.0",
  git: "https://github.com/DxRx/unblock.git",
  name: "dxrx:unblock",
});

Package.onUse(function(api, where) {
  configurePackages(api);
});

Package.onTest(function(api) {
  configurePackages(api);
  api.use(["ecmascript", "ddp", "tinytest", "random"]);
  api.addFiles("test/unblock.js", "server");
});

function configurePackages(api) {
  api.versionsFrom("METEOR@1.0");
  api.use("montiapm:meteorx@2.2.0");
  api.addFiles("src/unblock.js", "server");
}
