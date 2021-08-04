import { Component } from "react";
import { Row } from "react-bootstrap";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import Form from 'react-bootstrap/Form' 
 
class TaskComponent extends Component{

    constructor(props){
        super(props);
        this.task = props.task;
        this.task.setIsDone = props.task.setIsDone(this);
        this.task.name = props.task.name;
    }

     
    render(){

        return (

        <Form.Group className="mb-3" >
           <Form.Check type="checkbox"  value={this.task.isDone} onChange={((e)=>this.task.setIsDone(e.target.value))}>
           </Form.Check>
           <Form.Label>{this.task.name}</Form.Label>
        </Form.Group>
        )
    }
}

export default TaskComponent