$(function(){
	// GET, SHOW TASKS
	function getTodo(){
		$.ajax({
			url: '/tasks',
			contentType: 'application/json',
			success: function(res){
				var taskTable = $('tbody');

				taskTable.html('');

				res.todos.forEach(function(todo){
					taskTable.append('\
						<tr>\
							<td class="id" style="display:none">' +todo.id + '</td>\
							<td class="task">' + todo.task + '</td>\
							<td><button class="delete">Delete</button> </td>\
						</tr>\
					');
				});
			}
		});
	};

	// POST, ADD TASK
	$('#create-form').on('submit', function(e){
		e.preventDefault();

		var taskInput = $('#task-input');

		if(taskInput.val().length > 0){
			$.ajax({
				url: '/tasks',
				method: 'POST',
				contentType: 'application/json',
				data: JSON.stringify({task: taskInput.val()}),
				success: function(res){
					taskInput.val('');
					getTodo();
				}
			});
		}
	});

	// DELETE TASK
	$('table').on('click', '.delete', function(){
		var row = $(this).closest('tr');
		var id = row.find('.id').text();

		$.ajax({
			url: '/tasks/' + id,
			method: 'DELETE',
			contentType: 'application/json',
			success: function(res){
				getTodo();
			}
		});
	});

	getTodo();
});