 
import React, { Component,useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container'
import FormComponent from "../components/FormComponent";
import FooterBar from '../components/FooterBar';
import TaskModel from '../model/TaskModel';
 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import TasksView from '../components/TasksView';
import TaskComponent from '../components/TaskComponent';

function HomePage(){

    function defaultFilter(task){ return true; }
    function activeTasksFilter(task){ return !task.isDone; }
    function completedTasksFilter(task){ return task.isDone; };

    const [tasks, setTasks] = useState([]);
    const [tasksFiltered, setTasksFiltered] = useState([...tasks]);
    const [taskToAdd, setTaskToAdd] = useState("");
    const [filterBy, setFilterBy] = useState(()=>defaultFilter);
    const [taskToRemove, setTaskToRemove] = useState("");

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
        
        tasksCpy.splice(index, 1);
        setTasks(tasksCpy);
        setTasksFiltered(tasksCpy);
    }

    useEffect(() => { 
        removeTask(taskToRemove) 
      }, [taskToRemove]);


   function checkIfDone(taskId){
  
    return false;//task.isDone();
   }

   useEffect(() => { 
       console.log(filterBy);
    let tasksCpy = [...tasks];
    tasksCpy = (!tasks ? null : tasksCpy.filter(()=>filterBy));
    setTasksFiltered(tasksCpy); 
  }, [setFilterBy,filterBy,tasks]);

   
    

  // const tasksFiltered =  [...tasks].filter((task)=>filterBy(task));
    const tasksView = (!tasksFiltered ? null :tasksFiltered.map((task,index) =>{ 
        return <TaskComponent removeTask={removeTask} key={task.key+index} task={task}/>;}));

    return (<Container>
            <h1>ToDos</h1>
            <FormComponent tasks={tasks} setTasks={setTaskToAdd}/> 
            {tasksView}       
             <FooterBar defaultFilter={defaultFilter} activeFilter={activeTasksFilter} completedTasksFilter={completedTasksFilter} tasks={tasks} setFilter={setFilterBy} />
            </Container>
      
            )
    }

export default HomePage;