Template.userDetails.helpers({
	user: function() {
		
		return Users.findOne();
	}
});

Template.userDetails.events({
	'click #addAmount': function () {
		var amount = parseInt($('#amount').val());
		Users.update(this._id, {$inc: { total: amount}});
		History.insert({
 			value: amount,
 			date: new Date().toTimeString(),
 			userId: this._id
		});
	}
});

Template.history.helpers({
	historyItem: function () {
		
		return History.find({}, {sort: {date: -1}, limit: 5});
	}
});	
