import React from "react";
import Cardlist from "./Cardlist";
import SearchBox from "./SearchBox";
import { robots } from './robots';

class App extends React.Component{
    render(){
        return(
            <div className="tc center">
                <h1>Robo Friends</h1>
                <SearchBox />
                <Cardlist robots={robots}/>
            </div>
        )
    }

}

export default App;