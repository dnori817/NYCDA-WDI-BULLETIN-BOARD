const pg = require("pg");

const config = {
	user: "nori",
	database: "bulletinboard",
	password: "xxxxxxx",
	host: "localhost",
	port: 5432,
};

const pool = new pg.Pool(config);


pool.on("error", function(err) {
	console.error("Postgres query pool encountered an error" ,err);
});


module.exports = function(queryString, values, cb) {
	return pool.query(queryString, values, cb);
};
