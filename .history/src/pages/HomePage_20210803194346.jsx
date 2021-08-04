 
import React, { Component,useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import FormComponent from "../components/FormComponent";
import FooterBar from '../components/FooterBar';
import TaskModel from '../model/TaskModel';

import ActiveTasksComponent from '../components/ActiveTasksComponent'; 
import CompletedTasksComponent from '../components/CompletedTasksComponent';
import AllTasksComponent from '../components/AllTasksComponent'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import TasksView from '../components/TasksView';
import TaskComponent from '../components/TaskComponent';

function HomePage(){

    const [tasks, setTasks] = useState([]);
    const [tasksToDisplay, setTasksToDisplay] = useState([...tasks]);
    const [taskToAdd, setTaskToAdd] = useState("");
    const [filterBy, setFilterBy] = useState((()=>true));
    const [taskToRemove, setTaskToRemove] = useState("");

    // const [filteredTasks, setFilteredTasks] = useState(tasks);

    function updateTasks(){
        const newTaskName = document.getElementById("tasksAddInput").value;  
        const taskToAdd = new TaskModel(newTaskName,false); //todo: add key?
        const tasksCpy = [...tasks];
        tasksCpy.push(taskToAdd); 
        setTasks(tasksCpy);
         
    }

    useEffect(() => {
        updateTasks();
     }, [taskToAdd]) 


    function removeTask(taskId){
        const tasksCpy = [...tasks];
        const index = tasksCpy.map(function(item) {
            return item.key;
        }).indexOf(taskId);
        
        tasksCpy.splice(index, 1);
        setTasks(tasksCpy);
    }

    useEffect(() => {
        console.log(taskToRemove);
        removeTask(taskToRemove) 
      }, [taskToRemove]) 

//    function changeFilterView(updatedFilter){
       
//         setFilterBy(updatedFilter);
//     }

//     useEffect(() => {
//         setTasksToDisplay(tasks.filter((task)=>filterBy(task)));
//     }, [filterBy]) 
    

    const tasksView = (!tasks ? null : tasks.map((task,index) =>{ 
        return <TaskComponent removeTask={removeTask} key={task.key+index} task={task}/>;}));

    return (<Container>
            <h1>ToDos</h1>
            <FormComponent tasks={tasks} setTasks={setTaskToAdd}/> 
            {tasksView}       
             <FooterBar filterBy={filterBy} setFilter={setFilterBy} />
            </Container>
      
            )
    }

export default HomePage;