function TaskList() {
  this.tasks = {};
  this.taskNumber = 0;
  this.taskDone = false;
}

TaskList.prototype.assignNumber = function() {
  this.taskNumber += 1;
  return this.taskNumber;
}

TaskList.prototype.assignBool = function() {
  this.taskDone = true;
}

TaskList.prototype.addTask = function(task) {
  task.taskNumber = this.assignNumber();
  this.tasks[task.chore] = task;
}

function Tasks(chore) {
  this.chore = chore;
}