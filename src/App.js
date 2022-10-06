import React from "react";
import Cardlist from "./Cardlist";
import SearchBox from "./SearchBox";
//import { robots } from './robots';
import 'tachyons';

class App extends React.Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    
    componentDidMount(){
        fetch('https://jsonplaceholder.cypress.io/users')
            .then(response => response.json())
            .then(users => {this.setState({robots: users})});
    }


    render(){
        const filteredRobots = this.state.robots.filter( robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return(
            <div className="tc center">
                <h1 className="f1">Robo Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Cardlist robots={filteredRobots}/>
            </div>
        )
    }

}

export default App;