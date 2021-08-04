import React, { Component } from 'react';
import { Button, ButtonGroup, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import TaskModel from '../model/TaskModel';
import TasksView from './TasksView';


// todo: support task addition here!
function FormComponent({tasks,setTasks}) {

    // {tasks , setTasks}
 
    function addATask(e){
        if(e.charCode===13){
         
            setTasks();
          } 
            
    }  
   
    return (
    <Container>
      <Form onSubmit={((e)=>{ e.preventDefault();return false;})}>
        <Form.Group >
            <Form.Control type="text"  id="tasksAddInput" onKeyPress={((e)=>addATask(e))} placeholder="What's Next?" />
        </Form.Group>
      </Form>
    </Container>
    );
       
}

export default FormComponent;