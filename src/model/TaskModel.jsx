class TaskModel{
    constructor(name,isDone){
        this.name = name;
        this.isDone = isDone;
        this.key=name;
        this.setIsDone = this.setIsDone.bind(this);
    }

    setIsDone(boolVal){
        this.isDone = boolVal;
    }
}

export default TaskModel;