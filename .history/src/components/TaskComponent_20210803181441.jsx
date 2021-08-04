import { Component } from "react";
import { Button, Row } from "react-bootstrap";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import Form from 'react-bootstrap/Form' 
 
function TaskComponent({task,removeTask}){

        return (

        <Form.Group className="mb-3" >
                <Row>
           <Form.Check type="checkbox"  value={task.isDone} onChange={((e)=>task.setIsDone(e.target.value))}>
           </Form.Check>
           <Form.Label >{task.name} 
           <Button onClick={(()=>console.log("grugggg");removeTask(task))} variant="outline-secondary" id="button-addon1">
           Remove {task.name}
    </Button>
           </Form.Label>
           
           
           </Row>
        </Form.Group>
        )
    
}

export default TaskComponent