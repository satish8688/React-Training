import React, { Component } from "react";
import HomeGuide from './HomeGuide';

class Home extends Component {
    state = {
        name: "none",
        age: 32,
        count: 0,
        isTrue: false
    }

    clickMe = () => {
        console.log("----testing ");
        this.setState({
            name: "John",
            age: 42,
            count: this.state.count + 1,
            isTrue: !this.state.isTrue
        })
    }

    minuc = () => {
        if (this.state.count !== 0) {
            console.log("0");
            this.setState({
                count: this.state.count - 1
            })
        }
    }

    render() {
        console.log(this.state);
        return (<div>
            <HomeGuide
                title="This is from Home comp"
                info="demo"
                age={this.state.age}
                isTrue={this.state.isTrue}
                clickMe={this.clickMe}
            />
            <h1>Are you from India?: {this.state.isTrue
                ? <span style={{ color: 'green', fontWeight: 'bold' }}>Yes, I'm!</span>
                : <span style={{ color: 'red', fontWeight: 'bold' }}>No, I'm not!</span>}
            </h1>



                
            <h1>count: {this.state.count}</h1>
            <h1>Name is: {this.state.name}</h1>
            <h3>Age is: {this.state.age}</h3>



            <button onClick={this.clickMe}>CLick</button>
            <br />
            <button onClick={this.minuc}>-Minus</button>
        </div>)
    }
}

export default Home;