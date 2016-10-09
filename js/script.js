var toDoModel = {
	tasks: [],
	taskName: "",
	selectAll: false,
	leftTasksCount: 0,
	getLeftTasksCount: function(){
		toDoModel.leftTasksCount = toDoModel.tasks
			.filter(inverseTaskStatus).length;
	},
	addTask: function(event){
		if(event.keyCode === 13){
			event.preventDefault();

			var newItem = {
				text: toDoModel.taskName,
				complete: toDoModel.selectAll,
				show: true
			};
			toDoModel.tasks.push(newItem);
			toDoModel.taskName = "";
		}
	},
	removeTask: function(event, task){
		toDoModel.tasks.splice(task.index, 1);
	},
	checkAll: function(){
		toDoModel.tasks.forEach(function(task){
			task.complete = toDoModel.selectAll;
		});
	},
	showAllTasks: function(){
		toDoModel.tasks.forEach(function(task){
			task.show = true;
		});
	},
	showActiveTasks: function(){
		toDoModel.tasks.forEach(function(task){
			task.show = !task.complete;
		});
	},
	showCompletedTasks: function(){
		toDoModel.tasks.forEach(function(task){
			task.show = task.complete;
		});
	},
	clearCompletedTasks: function(){
		toDoModel.tasks = toDoModel.tasks
			.filter(inverseTaskStatus);
	}
}

function inverseTaskStatus(task){
	return !task.complete;
}

rivets.bind(document.getElementById("app"), {model : toDoModel});