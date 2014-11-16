import Ember from 'ember';

export default Ember.Route.extend({
	deactive: function(){
		var model = this.modelFor('friends/edit');

		if(model.get('isDirty')){
			model.rollback();
		}
	}
});
