import React, { Component } from 'react';
import { Button, ButtonGroup, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import TaskModel from '../model/TaskModel';
import TasksView from './TasksView';


// todo: support task addition here!
class FormComponent extends Component {

    // {tasks , setTasks}
    constructor(props){
        super(props);
        this.tasks = props.tasks;
        this.setTasks = props.setTasks.bind(this);
        this.addATaskLogic = this.addATaskLogic.bind(this);
        this.addATask = this.addATask.bind(this);
           
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
            <Form.Control type="text"  id="tasksAddInput" onKeyPress={((e)=>this.addATask(e))} placeholder="What's Next?" />
        </Form.Group>

        <Button variant="secondary" onClick={this.addATaskLogic}>add a task!</Button>
        <TasksView tasks={this.tasks}/>
      </Form>
    </Container>
    );
  }
       
}

export default FormComponent;