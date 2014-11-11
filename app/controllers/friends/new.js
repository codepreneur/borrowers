import Ember from 'ember';

export default Ember.ObjectController.extend({

	actions: {
		save: function(){
			console.log('+- save actions in friends new controller');

			return true;
		},
		cancel: function(){
			console.log('=- cancel actions in friends new controller');

			return true;
		}
	}

});
