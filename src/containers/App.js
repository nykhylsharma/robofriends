import React from "react";
import Cardlist from "../components/Cardlist";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
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
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter( robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        if(!robots.length){
            return("Loading!!!")
        }
        else{return(
            <div className="tc center">
                <h1 className="f1">Robo Friends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <Cardlist robots={filteredRobots}/>
                </Scroll>
                
            </div>
        )}
    }

}

export default App;