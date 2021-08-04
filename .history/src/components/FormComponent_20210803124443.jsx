import React, { Component } from 'react';
import { Button, ButtonGroup, Row } from 'react-bootstrap';
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
        this.addATaskLogic = this.addATaskLogic.bind();
        this.addATask = this.addATask.bind();
           
    }

    addATaskLogic(){
      const newTaskName = document.getElementById("tasksAddInput").value;  
            const taskToAdd = new TaskModel(newTaskName,false); 
            const arrCopied = this.tasks.concat(taskToAdd);
            this.setTasks(arrCopied);    
    }
    addATask(e){
        if(e.charCode===13){
         
            this.addATaskLogic();
          } 
            
    }  
  
  render() {
    return (
    <Container>
      <Form onSubmit={((e)=>{ e.preventDefault();return false;})}>
        <Form.Group >
            <Form.Control type="text"  id="tasksAddInput" onKeyPress={((e)=>addATask(e))} placeholder="What's Next?" />
        </Form.Group>

        <Button variant="secondary" onClick={addATaskLogic}>add a task!</Button>

      </Form>
    </Container>
    );
  }
       
}

export default FormComponent;