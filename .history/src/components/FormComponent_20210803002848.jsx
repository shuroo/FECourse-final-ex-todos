import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';


// todo: support task addition here!
class FormComponent extends Component {

  handleKeyPress(target) {
    if(target.charCode==13){
      alert(target.value());    
    } 
  }
  
  render() {
    return (
    <Container>
      <Form>
        <Form.Group controlId="form.Name">
            <Form.Control type="text" onKeyPress={((e)=>this.handleKeyPress(e))} placeholder="What's Next?" />
        </Form.Group>
      </Form>
    </Container>
    );
  }
       
}

export default FormComponent;