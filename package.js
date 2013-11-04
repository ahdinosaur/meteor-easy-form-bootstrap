Package.describe({
  summary: "easy-form extensions using bootstrap"
});

Package.on_use(function (api) {
  api.use('underscore', 'client');
  api.use('handlebars', 'client');
  api.use('templating', 'client');
  api.use('random', 'client');
  api.use('jquery', 'client');
  api.use('bootstrap-3', 'client');
  api.use('easy-form', 'client');
  api.use('alpaca-bootstrap', 'client');
  api.add_files('client.html', 'client');
  api.add_files('client.js', 'client');
});
