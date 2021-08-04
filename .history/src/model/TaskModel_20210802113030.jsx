class TaskModel{
    constructor({name,isDone}){
        this.name = name;
        this.isDone = isDone;
    }

    setDone(boolVal){
        this.isDone = boolVal;
    }
}

export default TaskModel;