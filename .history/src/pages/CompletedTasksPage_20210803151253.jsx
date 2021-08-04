 
import React, { Component } from 'react';

 
function CompletedTasksPage({tasks}){

    return (   <TasksView tasks={tasks.filter(task=>task.isDone)} setTasks={setTasks}/>);}

export default CompletedTasksPage;