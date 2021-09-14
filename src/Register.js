import React, { Component } from 'react';
import './Register.css';

class Register extends Component {
    state = {
        username: '',
        password: ''
    }

    inputHandle = (event) => {
        const name = event.target.name;
        const type = event.target.type;
        const value = event.target.value;
        // this.setState({
        //     username: value
        // })
        if (name === "userEmailAddess") {
            this.setState({
                username: value
            })
        } else if (name === "userPassword") {
            this.setState({
                password: value
            })
        }

        console.log("*****************", name, type, value);
    }

    // FORM SUBMIT
    submit = (event) => {
        event.preventDefault();
        console.log("===========>", event);
    }

    // hitme = (event) => {
    //     event.preventDefault();
    // }

    render() {
        console.log(this.state);
        return (
            <div>
                <form className="form2" autoComplete="off">
                    <div className="form2-grp">
                        <label className="form2-label" htmlFor="">Username</label>
                        <input type="email" className="form2-inp" name="userEmailAddess" onChange={this.inputHandle} />
                    </div>
                    <div className="form2-grp">
                        <label className="form2-label" htmlFor="">Password</label>
                        <input type="password" className="form2-inp" name="userPassword" onChange={this.inputHandle} />
                    </div>
                    <div className="form2-grp">
                        <button className="form2-btn" disabled={false} onClick={this.submit}>Submit</button>
                    </div>
                </form>
                {/* <a href="" onClick={this.hitme}>clcikmsadbasvb</a> */}
            </div>
        )
    }
}

export default Register;