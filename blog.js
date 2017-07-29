const query = require("./query");

const Blogposts = {
	showAll: function() {
		return query("SELECT * FROM messages").then(function(res) {
			return res.rows;
		});
	},

	add: function(msg) {
		return query("INSERT INTO messages (name) VALUES ($1)", [msg]);
	},
};
