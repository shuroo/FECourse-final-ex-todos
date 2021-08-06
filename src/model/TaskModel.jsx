class TaskModel{
    constructor(name,index,isDone){
        this.name = name;
        this.isDone = isDone;
        this.key=name+index;
    }
}

export default TaskModel;