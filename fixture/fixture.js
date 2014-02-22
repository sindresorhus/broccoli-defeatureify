App.IndexRoute = Ember.Route.extend({
  model: function() {
    Ember.warn('This is a debug statement that will be removed by defeatureify');
    return ['red', 'yellow', 'blue'];
  }
});
