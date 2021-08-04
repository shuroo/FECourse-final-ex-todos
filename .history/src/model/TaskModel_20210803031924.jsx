class TaskModel{
    constructor(name,isDone){
        this.name = name;
        this.isDone = isDone;
        this.key=name;
    }

    setDone(boolVal){
        this.isDone = boolVal;
    }
}

export default TaskModel;