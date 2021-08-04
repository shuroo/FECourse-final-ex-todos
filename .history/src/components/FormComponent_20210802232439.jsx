import React, { Component } from 'react';
import { Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';


// todo: support task addition here!
class FormComponent extends Component {

  onFormSubmit(e){
      alert(e.target.value);
  }  
  render() {
    return (
    <Container>
      <Form onSubmit={this.onFormSubmit}>
        <Form.Group controlId="form.Name">
            <Form.Control type="text" placeholder="What's Next?" />
        </Form.Group>
      </Form>
    </Container>
    );
  }
       
}

export default FormComponent;