 
import React, { Component } from 'react';
import TasksView from '../components/TasksView';

 
function CompletedTasksPage({tasks}){

    return (   <TasksView tasks={tasks.filter(task=>task.isDone)}  />);}

export default CompletedTasksPage;