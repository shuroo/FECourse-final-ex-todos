import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';


// todo: support task addition here!
class FormComponent extends Component {

    constructor({tasks,addTask}){
        super({tasks,addTask});
        this.state = {newTaskName : null};

    }
    handleKeyPress(target) {
        if(target.charCode==13){
          alert('Enter clicked!!!'); 
          document.getElementById("tasksAddInput").value;   
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