 
import React, { Component,useState } from 'react';
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

  

function HomePage(){

    const [tasks, setTasks] = useState([]);
    const [count, setCount] = useState(0);

    function updateTasks(){
        const newTaskName = document.getElementById("tasksAddInput").value;  
        const taskToAdd = new TaskModel(newTaskName,false); 
        const tasksCpy = [...tasks];
        tasksCpy.push(taskToAdd); 
        setTasks(tasksCpy);
        setCount(count + 1); 
         
    }

    return (<Container>
            <h1>ToDos</h1>
            <FormComponent tasks={tasks} setTasks={updateTasks}/> 
            <TasksView tasks={tasks} />
            </Container>
            {/* <Container>
            <Router>
        <Switch>
           
        <Route exact path="/">
        <AllTasksComponent />
        </Route>
        <Route path="/actives">
          <ActiveTasksComponent />
        </Route>
        <Route path="/completed">
        <CompletedTasksComponent />
        </Route>
      </Switch>
      </Router>
            </Container>
            <FooterBar />
            </Container> */}
            )
    }

export default HomePage;