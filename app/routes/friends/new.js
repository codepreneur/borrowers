import Ember from 'ember';

export default Ember.Route.extend({
	model: function(){
		return this.store.createRecord('friend');
	},
	deactive: function(){
		var model = this.modelFor('friends/new');

		if(model.get('isNew')){
			model.destroyRecord();
		}
	}
});
