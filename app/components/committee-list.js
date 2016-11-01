import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    chamberLookup() {
      debugger;
      var params = {
        chamber: this.get('chamber')
      };
      this.sendAction('chamberLookup', params);
    }
  }
});
