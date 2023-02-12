function TaskList() {
  this.tasks = {};
  this.taskNumber = 0;
}

TaskList.prototype.assignNumber = function() {
  this.taskNumber += 1;
  return this.taskNumber;
}

TaskList.prototype.addTask = function(task) {
  task.taskNumber = this.assignNumber();
  this.tasks[task.chore] = task;
}

function Tasks(chore) {
  this.chore = chore;
}