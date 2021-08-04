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
        this.props.tasks = props.tasks;
        this.props.setTasks = props.setTasks;
           
    }
    handleKeyPress(target) {
        if(target.charCode==13){
          alert('Enter clicked!!!'); 
          const newTaskName = document.getElementById("tasksAddInput").value;  
          const taskToAdd = new TaskModel(newTaskName,false); 
          setTasks(tasks.concat(taskToAdd)); 
        } 
      }
  
  render() {
    return (
    <Container>
      <Form>
        <Form.Group controlId="form.Name">
            <Form.Control type="text" id="tasksAddInput" onKeyPress={this.handleKeyPress} placeholder="What's Next?" />
        </Form.Group>
      </Form>
    </Container>
    );
  }
       
}

export default FormComponent;