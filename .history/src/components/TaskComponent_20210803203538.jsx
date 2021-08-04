import { Component } from "react";
import { Button, Row } from "react-bootstrap";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import Form from 'react-bootstrap/Form' 
 
function TaskComponent({task,removeTask}){


        function setDone(e){
                
                  task.setIsDone(e.target.value)
                  console.log(task.name+","+task.isDone);      
           }
        

        return (

        <Form.Group className="mb-3" >
                <Row>
           <Form.Check type="checkbox"  value={task.isDone} onChange={(e)=>setDone(e)}/> 
            
           <Form.Label >{task.name} 
           <Button onClick={(()=>{removeTask(task.key)})} variant="outline-secondary" id="button-addon1">
           Remove {task.name}
    </Button>
           </Form.Label>
           
           
           </Row>
        </Form.Group>
        )
    
}

export default TaskComponent