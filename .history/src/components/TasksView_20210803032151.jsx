import { Component } from "react";
import { Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form' 
import TaskComponent from "./TaskComponent";
 
class TasksView extends Component{

    constructor(tasks){
        super(tasks);
        this.tasks = tasks;
    }

    render() {
    const tasksView = this.tasks.map(task =>{alert(task.name); 
        return <TaskComponent task={task}/>;});

    return tasksView;
    }
}

export default TasksView;