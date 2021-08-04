import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';


// todo: support task addition here!
class FormComponent extends Component {

    constructor({tasks,setTasks}){
        super({tasks,addTask});
    }
    handleKeyPress(target) {
        if(target.charCode==13){
          alert('Enter clicked!!!'); 
          const newTaskName = document.getElementById("tasksAddInput").value;  
          const taskToAdd = new Task(newTaskName,false); 
          setTasks(tasks.concat(taskToAdd)); 
        } 
      }
  
  render() {
    return (
    <Container>
      <Form>
        <Form.Group controlId="form.Name">
            <Form.Control type="text" value={newTaskName} onKeyPress={this.handleKeyPress} placeholder="What's Next?" />
        </Form.Group>
      </Form>
    </Container>
    );
  }
       
}

export default FormComponent;