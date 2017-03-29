var express = require('express'),
	app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.listen(PORT, function(){
	console.log("Server listening on PORT: " + PORT);
});