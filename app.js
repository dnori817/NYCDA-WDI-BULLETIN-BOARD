// require('dotenv').config();
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Bboard = require('./board');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('"assets"'));
app.set("view engine", "ejs");

function renderBoard(res, message) {
	Bboard.getAll().then(function(message) {
		res.render("board", {
			// title: title,
			message: message,
		});
	});
}

app.get("/", function(req, res) {
	renderBoard(res);
});




const port = process.env.PORT || 3000;
app.listen(port, function() {
	console.log("Listening on port" + port);
});
