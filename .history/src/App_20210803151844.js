import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage';

function App() {
    return ( <
        Container >
        <
        HomePage / >
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
        /Route> < /
        Switch > <
        /Container> < /
        Router >

        <
        HomePage / >
    );
}

export default App;