import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import TaskModel from '../model/TaskModel';


// todo: support task addition here!
class FormComponent extends Component {

    // {tasks , setTasks}
    constructor(props){
        super(props);
        this.tasks = props.tasks;
        this.setTasks = props.setTasks;
           
    }

    addATask(e){
        if(e.charCode===13){
         
            const newTaskName = document.getElementById("tasksAddInput").value;  
            const taskToAdd = new TaskModel(newTaskName,false); 
            const arrCopied = this.tasks.concat(taskToAdd);
            this.setTasks(arrCopied); 
            alert(taskToAdd.name); 
          } 
            
    }  
  
  render() {
    return (
    <Container>
      <Form onSubmit={(()=>{return false;})}>
        <Form.Group >
            <Form.Control type="text"  id="tasksAddInput" onKeyPress={((e)=>this.addATask(e))} placeholder="What's Next?" />
        </Form.Group>
      </Form>
    </Container>
    );
  }
       
}

export default FormComponent;