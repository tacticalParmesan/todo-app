import { Builder } from "../builder/builder";
import { Page } from "../..";
import "./task.css";

export function TaskList() {
	const taskContainer = Builder.build({
		classes: ["task-container"],
		parent: Page.content,
	});

	return taskContainer;
}

export function TaskCard(
    //taskIdx,
	taskList,
	//title,
	//description,
	//dueDate,
	//priority,
	//project
) {
    const newTaskContainer = Builder.build({
        classes: ["task-card"],
        parent: taskList
    })
}
