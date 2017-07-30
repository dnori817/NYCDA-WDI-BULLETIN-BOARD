const query = require("./query");

const Bboard = {
	getAll: function() {
		return  query("SELECT * FROM messages")
			.then(function(res) {
				return res.rows;
			});
	},

	add: function(message) {
		return query("INSERT INTO messages (title, body) VALUES ($1, $2)", message);
	},

};

module.exports = Bboard;
