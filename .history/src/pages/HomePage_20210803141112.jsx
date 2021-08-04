 
import React, { Component,useState } from 'react';
import Container from 'react-bootstrap/Container'
import FormComponent from "../components/FormComponent";
import TasksView from '../components/TasksView';
import TaskModel from '../model/TaskModel';

function HomePage(){

    const [tasks, setTasks] = useState([]);
    const [count, setCount] = useState(0);

    function updateTasks(newTask){
        alert(newTask);
        const tasksCpy = [...tasks];
        tasksCpy.push(newTask);
        alert(tasksCpy.length);
        setTasks(tasksCpy);
        setCount(count + 1);
         console.log(tasks+","+count);
         
    }

    return (<Container>
            <h1>ToDos</h1>
   <FormComponent tasks={tasks} setTasks={((newTask)=>updateTasks(newTask))}/> 
   <div>{tasks.map(t=>t.name)}</div>
   </Container>)
    }

export default HomePage;