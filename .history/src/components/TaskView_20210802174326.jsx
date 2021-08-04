import { Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form' 
 
class TaskView extends Component {

    constructor({tasks}){
        this.tasks = tasks;
    }

    render() {
    const tasksView = this.tasks.map(task=><Row ><Form.Check onCheck={} /><Form.Label>{task.name}</Form.Label>{task.name} </Row>);

    return (
       
    );
    }
}

export default TaskView;