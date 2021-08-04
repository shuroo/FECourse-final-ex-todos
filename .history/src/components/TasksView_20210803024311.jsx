import { Component } from "react";
import { Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form' 
import TaskComponent from "./TaskComponent";
 
class TasksView extends Component{

    constructor(props){
        super(props);
        this.tasks = props.tasks;
    }

    render() {
    const tasksView = this.tasks.map(task=><Row><TaskComponent key={task.key} task={task}/></Row>);

    return tasksView;
    }
}

export default TasksView;