import React from "react";

class SearchBox extends React.Component{
    render(){
        return(
            <div>
               <input type='search' placeholder="Search your robo here" onChange={this.props.searchChange}/>
            </div>
        )
    }
}

export default SearchBox;