 
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import FormComponent from "../components/FormComponent";
import TasksView from '../components/TasksView';

function HomePage(){

    const [tasks, setTasks] = useState([]);

    return (<Container>
            <h1>ToDos</h1>
   <FormComponent/>
   <TasksView tasks={tasks}/>
   </Container>
);
    }

export default HomePage;