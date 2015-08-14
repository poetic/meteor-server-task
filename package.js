Package.describe({
  name: 'poetic:server-task',
  version: '0.0.1',
  summary: 'Run one off server tasks with ease.',
  git: 'https://github.com/poetic/meteor-server-task',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('server-task.js', ['client', 'server']);
  api.addFiles('server-task-client.js', 'client');
  api.addFiles('server-task-server.js', 'server');
  api.export('ServerTask')
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('poeitc:task');
  api.addFiles('server-task-tests.js');
});
