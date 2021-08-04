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
    handleKeyPress(target) {
        if(target.charCode==13){
         
          const newTaskName = document.getElementById("tasksAddInput").value;  
          const taskToAdd = new TaskModel(newTaskName,false); 
          this.setTasks(this.tasks.concat(taskToAdd)); 
          alert(newTaskName); 
        } 
      }
    addATask(e){
        if(e.charCode===13){
         
            alert(document.getElementById("tasksAddInput").value);  
            // const taskToAdd = new TaskModel(newTaskName,false); 
            // this.setTasks(this.tasks.concat(taskToAdd)); 
            // alert(newTaskName); 
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