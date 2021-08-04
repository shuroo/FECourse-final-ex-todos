import { Component } from "react";
import { Button, Row } from "react-bootstrap";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import Form from 'react-bootstrap/Form' 
 
function TaskComponent({task,removeTask}){

        return (

        <Form.Group className="col-lg-12 col-sm-12 col-md-12" >
                <Row className="row">
           <Form.Check type="checkbox" key={task.key}  onChange={(e)=>task.setIsDone(e.target.value)}/> 
           <Form.Label >{task.name} 
           <Button className="button-primary" onClick={(()=>{removeTask(task.key)})} variant="outline-secondary" id="button-addon1">
           Remove {task.name}
    </Button>
           </Form.Label>
           
           
           </Row>
        </Form.Group>
        )
    
}

export default TaskComponent