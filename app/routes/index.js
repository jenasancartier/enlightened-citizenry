import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    zipLookup(params) {
      this.transitionTo('results', params.zip);
    },
    chamberLookup(params) {
      this.transitionTo('results', params.chamber);
    }
  }
});
