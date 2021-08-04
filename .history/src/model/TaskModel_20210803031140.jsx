class TaskModel{
    constructor(props){
        this.name = props.name;
        this.isDone = props.isDone;
        this.key=props.name;
    }

    setDone(boolVal){
        this.isDone = boolVal;
    }
}

export default TaskModel;