import { Component } from "react";
import { Row } from "react-bootstrap";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import Form from 'react-bootstrap/Form' 
 
function TaskComponent({task}){

        return (

        <Form.Group className="mb-3" >
           <Form.Check type="checkbox"  value={task.isDone} onChange={((e)=>task.setIsDone(e.target.value))}>
           </Form.Check>
           <Form.Label>{task.name}</Form.Label>
        </Form.Group>
        )
    
}

export default TaskComponent