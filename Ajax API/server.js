var express = require('express'),
	app = express(),
	bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;

var todos = [
	{
		id: 1,
		task: 'Eat food'
	},
	{
		id: 2,
		task: 'Take a bath'
	}
];

var currentId = 2;

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/tasks', function(req, res){
	res.send({todos: todos});
});

app.post('/tasks', function(req, res){
	var newTask = req.body.task;
	currentId++;

	todos.push({
		id: currentId,
		task: newTask
	});
	res.send('Successfully added task!');
});

app.listen(PORT, function(){
	console.log("Server listening on PORT: " + PORT);
});