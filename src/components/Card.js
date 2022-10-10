import React from "react";

class Card extends React.Component{
    render(){
        return(
            <div className='tc ba b--solid br2 bg-light-blue bw1 fl w-third avenir measure grow grow:hover pa2 ma2'>
            <img alt='roboPhoto' src={`https://robohash.org/${this.props.id}?200x200`}/>
                <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.email}</p>
                </div>
            </div>
        );
    }
}

export default Card;