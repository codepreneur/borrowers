import DS from 'ember-data';
import Ember from 'ember';
import changeGate from 'ember-computed-change-gate/change-gate';

export default DS.Model.extend({
	articles: DS.hasMany('articles', {async: true}),
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  email: DS.attr('string'),
  twitter: DS.attr('string'),
  totalArticles: DS.attr('number'),
  fullName: function(key, value, oldValue){
  	if(arguments.length === 1){
  		// works as getter

  		return this.get('firstName') + ' ' + this.get('lastName');
  	} else {
  		// works as setter

  		var name = value.split(' ');

  		this.set('firstName', name[0]);
  		this.set('lastName', name[1]);

  		return value;
  	}
  	
  }.property('firstName', 'lastName'),
  capitalizedFirstName: changeGate('firstName', function(firstName) {
		return Ember.String.capitalize(firstName); 
	})
});
