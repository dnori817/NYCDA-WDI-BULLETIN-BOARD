const express = require("express");
const app = express();

app.use(express.static("assets"));
app.set("view engine", "ejs");









app.listen(3000, function() {
	console.log("Your server is available at http://localhost:3000");
});