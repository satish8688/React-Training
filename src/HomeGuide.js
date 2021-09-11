import React, { Component } from 'react';

class HomeGuide extends Component{

    render(){
        console.log(this.props);
        return (<div style={{backgroundColor: "black", color: "white", padding: 10}}>
            <h1 style={{backgroundColor: "grey", color: "white"}}>Guide: {this.props.title}</h1>
            <h2>{this.props.age}</h2>
            <h3>{this.props.isTrue ? "Is true" : "is false"}</h3>
            <button onClick={this.props.clickMe}>Clicking from child cmp</button>
        </div>)
    }
}

export default HomeGuide;