$(function(){
	// GET, SHOW TASKS
	$('#get-btn').on('click', function(){
		$.ajax({
			url: '/tasks',
			contentType: 'application/json',
			success: function(res){
				var taskTable = $('tbody');

				taskTable.html('');

				res.todos.forEach(function(todo){
					taskTable.append('\
						<tr>\
							<td class="name">' + todo.task + '</td>\
						</tr>\
					');
				});
			}
		});
	});

	// POST, ADD TASK
	$('#create-form').on('submit', function(e){
		e.preventDefault();

		var taskInput = $('#task-input');

		$.ajax({
			url: '/tasks',
			method: 'POST',
			contentType: 'application/json',
			data: JSON.stringify({task: taskInput.val()}),
			success: function(res){
				taskInput.val('');
				$('#get-btn').click();
			}
		});
	});
});