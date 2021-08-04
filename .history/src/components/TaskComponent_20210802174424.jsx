import { Row } from "react-bootstrap";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import Form from 'react-bootstrap/Form' 
 
class TaskComponent extends Component {

    constructor({task}){
        this.task = task;
    }
    render(){

        return 

        <Form.Group className="mb-3" id="formGridCheckbox">
           <Form.Check type="checkbox"  value={this.task.isDone} onChange={((e)=>this.task.setIsDone(e.target.value))}>
           </Form.Check>
           <Form.Label>{task.name}</Form.Label>
        </Form.Group>

    }
}

export default TaskComponent