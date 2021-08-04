 
import React, { Component } from 'react';

 
function ActiveTasksPage({tasks}){

    return (   <TasksView tasks={tasks.filter(task=>!task.isDone)} setTasks={setTasks}/>);}

export default ActiveTasksPage;