 
import React, { Component } from 'react';
import TasksView from '../components/TasksView';

 
function AllTasksPage({tasks}){

    return (   <TasksView tasks={tasks}  />);}

export default AllTasksPage;