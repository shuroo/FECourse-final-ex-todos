import { Component } from "react";
import { Button, Row } from "react-bootstrap";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import Form from 'react-bootstrap/Form' 
 
function TaskComponent({task,removeTask}){

        return (

        <Form.Group className="row-lg-12 row-sm-12 row-md-12 row" >
           <Form.Label > 
           <Form.Check type="checkbox" key={task.key}  onChange={(e)=>task.setIsDone(e.target.value)}/> 
           {task.name} 
           <Button className="button-primary" onClick={(()=>{removeTask(task.key)})} variant="outline-secondary" id="button-addon1">
           Remove {task.name}
    </Button>
           </Form.Label>
           
           
          
        </Form.Group>
        )
    
}

export default TaskComponent