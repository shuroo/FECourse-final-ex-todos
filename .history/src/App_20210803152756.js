import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';
import { Container } from 'react-bootstrap';
import AllTasksPage from './pages/AllTasksPage';
import ActiveTasksPage from './pages/ActiveTasksPage';
import CompletedTasksPage from './pages/CompletedTasksPage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    return ( <
        Container >
        <
        HomePage / >
        <
        Router >
        <
        Switch >

        <
        Route exact path = "/" >
        <
        AllTasksPage / >
        <
        /Route> <
        Route path = "/actives" >
        <
        ActiveTasksPage / >
        <
        /Route> <
        Route path = "/completed" >
        <
        CompletedTasksPage / >
        <
        /Route> <
        /Switch> <
        /Router> <
        /Container>


    );
}

export default App;