import { Row } from "react-bootstrap";
import Form from 'react-bootstrap/Form' 
 
class TasksView extends Component {

    constructor({tasks}){
        this.tasks = tasks;
    }

    render() {
    const tasksView = this.tasks.map(task=><Row ><Form.Check /><Form.Label>{}</Form.Label>{task.name} </Row>);

    return (
       
    );
    }
}

export default TasksView;