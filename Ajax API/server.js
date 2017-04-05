var express = require('express'),
	app = express(),
	bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;

var todos = [
	{
		id: 1,
		name: 'Eat food'
	},
	{
		id: 2,
		name: 'Take a bath'
	}
];

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.listen(PORT, function(){
	console.log("Server listening on PORT: " + PORT);
});