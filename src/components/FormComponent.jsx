import React, { Component } from 'react';
import { Button, ButtonGroup, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
// todo: support task addition here!
function FormComponent({tasks,setTasks}) {

    // {tasks , setTasks}
 
    function addATask(e){
        if(e.charCode===13){
          const newTaskName = e.target.value;  
             setTasks(newTaskName);
          } 
            
    }  
   
    return (
    <Container className="formWrapper">
      <Form onSubmit={((e)=>{ e.preventDefault();return false;})}>
        <Form.Group >
            <Form.Control type="text"  id="tasksAddInput" onKeyPress={((e)=>addATask(e))} placeholder="What's Next?" />
        </Form.Group>
      </Form>
    </Container>
    );
       
}

export default FormComponent;