 
import React, { Component,useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import FormComponent from "../components/FormComponent";
import FooterBar from '../components/FooterBar';
import TaskModel from '../model/TaskModel'; 
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom"; 
import TaskComponent from '../components/TaskComponent';
import { Alert } from 'react-bootstrap';

function HomePage(){

    function defaultFilter(task){ return true; }
    function activeTasksFilter(task){ return task && !task.isDone; }
    function completedTasksFilter(task){ return task && task.isDone; };

    const [tasks, setTasks] = useState([]);
    const [tasksFiltered, setTasksFiltered] = useState([...tasks]);
    const [taskToAdd, setTaskToAdd] = useState("");
    const [filterBy, setFilterBy] = useState("All");
    const [taskToRemove, setTaskToRemove] = useState("");
    const [showAlert, setShowAlert] = useState("none");
    // const [filteredTasks, setFilteredTasks] = useState(tasks);

    function updateTasks(){
        const newTaskName = document.getElementById("tasksAddInput").value;  
        const taskToAdd = new TaskModel(newTaskName,false); //todo: add key?
        const tasksCpy = [...tasks];
        tasksCpy.push(taskToAdd); 
        setTasks(tasksCpy);
        setTasksFiltered(tasksCpy);
         
    }

    useEffect(() => {
        updateTasks();
     }, [taskToAdd]) 


    function removeTask(taskId){
        const tasksCpy = [...tasks];
        const index = tasksCpy.map(function(item) {
            return item.key;
        }).indexOf(taskId);
        if(tasksCpy[taskId].isDone){
        tasksCpy.splice(index, 1);
        setTasks(tasksCpy);
        setTasksFiltered(tasksCpy);
        }
        else{
            setShowAlert("block");
        }
    }

    useEffect(() => { 
        removeTask(taskToRemove) 
      }, [taskToRemove]);

 

   useEffect(() => { 
    let tasksCpy = [...tasks];
    let filterByFunc = ((filterBy === 'All') ? defaultFilter : ((filterBy === 'Active') ? activeTasksFilter : completedTasksFilter )); 
    tasksCpy = (!tasks ? null : tasksCpy.filter(filterByFunc));
    //alert(tasksCpy.length);
    setTasksFiltered(tasksCpy); 
  }, [setFilterBy,filterBy]);

   

  // const tasksFiltered =  [...tasks].filter((task)=>filterBy(task));
    const tasksView = (!tasksFiltered ? null :tasksFiltered.map((task,index) =>{ 
        return <TaskComponent removeTask={removeTask} key={task.key+index} task={task}/>;}));

    return (<Container  fluid="md" className="">
            <h1>ToDos</h1>
            <Alert key={"removeWarning"} variant="danger" style={{"display":showAlert}}>
                Cannot Remove incomplete task. aborting.
            </Alert>
            <FormComponent tasks={tasks} setTasks={setTaskToAdd}/> 
            {tasksView}       
             <FooterBar  tasks={tasks} setFilter={setFilterBy} />
            </Container>
      
            )
    }

export default HomePage;