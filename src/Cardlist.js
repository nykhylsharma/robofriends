import React from "react";
import Card from "./Card";
import 'tachyons';


class Cardlist extends React.Component{

    render(){
        return(
        <div className="mw9 center ph3-ns">
        {   
            this.props.robots.map((robot,index)=>{
                return(
                    <Card 
                    key={index} 
                    id={robot.id} 
                    name={robot.name} 
                    email={robot.email}/>
                )
            })
        }   
        </div> 
        );      
    }

}


export default Cardlist;