test: create an object containing a list of tasks with IDs
code: input["do dishes", "make bed"]
outcome: do dishes, make bed

test: write a function to be able to add new tasks
code: input["wash car"]
outcome: do dishes, make bed, wash car

test: write a function to number the tasks
code: taskList;
outcome: ["wash car", task 1]

test: write a function that will test if a task is complete
code: taskDone = true;
outcome: ["wash car", task 1] (crossed out)

