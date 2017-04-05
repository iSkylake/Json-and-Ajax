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
});