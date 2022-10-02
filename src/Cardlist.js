import React from "react";
import Card from "./Card";
import { robots } from "./robots";

class Cardlist extends React.Component{
    
    render(){
        return(
        <div>
        {
            robots.map((robot,index)=>{
                return(
                    <Card 
                    key={index} 
                    id={robots[index].id} 
                    name={robots[index].name} 
                    email={robots[index].email}/>
                )
            })
        }   
        </div> 
        );      
    }

}


export default Cardlist;