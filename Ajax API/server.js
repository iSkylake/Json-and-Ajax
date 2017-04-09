var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	uuidV1 = require('uuid/v1');

var PORT = process.env.PORT || 3000;

var id1 = uuidV1();
var id2 = uuidV1();

var todos = [
	{
		id: id1,
		task: 'Eat food'
	},
	{
		id: id2,
		task: 'Take a bath'
	}
];

app.use(express.static(__dirname));
app.use(bodyParser.json());

app.get('/tasks', function(req, res){
	res.send({todos: todos});
});

app.post('/tasks', function(req, res){
	var newTask = req.body.task;
	var genId = uuidV1();

	todos.push({
		id: genId,
		task: newTask
	});
	res.send('Successfully added task!');
});

app.delete('/tasks/:id', function(req, res){
	var id = req.params.id;
	var found = false;

	todos.forEach(function(todo, index){
		if(!found && todo.id === id){
			console.log(id);
			todos.splice(index, 1);
		}
	});
	res.send('Successfully deleted task!');
});

app.listen(PORT, function(){
	console.log("Server listening on PORT: " + PORT);
});