import { Component } from "react";
import { Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form' 
import TaskComponent from "./TaskComponent";
 
class TasksView extends Component{

    constructor(props){
        super(props);
        this.tasks = props.tasks;
        this.setTasks = props.setTasks.bind(this);
    }

    render() {
    const tasksView = this.tasks.map(task =>{ 
        console.log('task:'+task.key);
        return <TaskComponent key={task.key} task={task}/>;});

    return tasksView;
    }
}

export default TasksView;