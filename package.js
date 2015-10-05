Package.describe({
  summary: "Reactive bootstrap modals for meteor",
  version: "1.0.5",
  git: "https://github.com/jchristman/reactive-modal.git",
  name: "jchristman:reactive-modal"
});

Package.on_use(function (api) {
  if(api.versionsFrom){
    api.versionsFrom('METEOR@1.0');
  }
  api.use(['underscore', 'jquery','templating', 'reactive-var@1.0.6'], 'client');
  api.add_files(['lib/reactive-modal.html', 'lib/reactive-modal.js', 'lib/ev.js'], "client");
  api.export('ReactiveModal', ['client']);
});
