Package.describe({
  name: 'poeitc:task',
  version: '0.0.1',
  summary: 'Run one off server tasks with ease.',
  git: 'https://github.com/Chun-Yang/meteor-task',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.addFiles('task.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('poeitc:task');
  api.addFiles('task-tests.js');
});
