Users = new Meteor.Collection('protein_data');
History = new Meteor.Collection('history');

if (Meteor.isServer) {
	Meteor.startup(function() {
	if(Users.find().count() === 0) {
	Users.insert({
			total: 123,
			goal: 149
		});
}

History.remove({});
if (History.find().count() === 0) {
	History.insert({
		value: 90,
		date: new Date().toTimeString()
		}); 
	History.insert({
		value: 80,
		date: new Date().toTimeString()
		}); 
	History.insert({
		value: 70,
		date: new Date().toTimeString()
		}); 
}
});
}