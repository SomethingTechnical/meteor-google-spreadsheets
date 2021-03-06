Package.describe({
  summary: "Google Spreadsheets",
  name: "ongoworks:google-spreadsheets",
  version: "0.3.0",
  git: "https://github.com/ongoworks/meteor-google-spreadsheets"
});

Npm.depends({
  "google-spreadsheets": "0.4.1",
  "googleclientlogin": "0.2.8",
  "edit-google-spreadsheet": "0.2.16"
});

Package.on_use(function (api) {
  api.versionsFrom("METEOR@0.9.0");
  api.imply(["underscore"], ["client", "server"]);
  api.use("check")
  api.export('GoogleSpreadsheets');
  api.export('GoogleClientLogin');
  api.export('GASpreadsheet');
  api.addFiles('client/subscriptions.js', 'client');
  api.addFiles('common/collections.js', ['client','server']);
  api.addFiles('server/methods.js', 'server');
  api.addFiles('server/publications.js', 'server');
  api.addFiles('google-spreadsheets.js', 'server');
});
