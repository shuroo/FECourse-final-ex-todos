 
import React, { Component } from 'react';
import TasksView from '../components/TasksView';

 
function CompletedTasksComponent({tasks}){

    return (   <TasksView tasks={(tasks ? tasks.filter(task=>task.isDone) : [])}  />);}

export default CompletedTasksComponent;