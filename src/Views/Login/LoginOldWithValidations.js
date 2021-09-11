import React, { Component } from 'react';
import LoginCmp from '../../Component/LoginCmp/LoginCmp';

export class Login extends Component {
    state = {
        name: "",
        password: "",
        address: "",
        errorObj: {
            nameErr: false,
            passwordErr: false,
            addressErr: false
        }
    }

    handleChange = (event) => {
        // OBJECT DESTRUCTURING
        const { name, value, type, className, required, placeholder } = event.target;
        let isEmpt = value ? false : true;
        // this.setState({name: value})
        // if (name === "username") {
        //     this.setState({ name: value });
        // } else if (name === "userpassword") {
        //     this.setState({ password: value });
        // } else if (name === "useraddress") {
        //     this.setState({address: value})
        // }
        switch (name) {
            case "username":
                if (value.length >= 6) {
                    this.setState((preState) => ({
                        errorObj: {
                            ...preState.errorObj,
                            nameErr: true
                        }
                    }))
                } else {
                    this.setState((preState) => ({
                        errorObj: {
                            ...preState.errorObj,
                            nameErr: false
                        }
                    }))
                }
                this.setState({
                    name: value
                });
                break;
            case "userpassword":
                if (value === "") {
                    this.setState((preState) => ({
                        errorObj: {
                            ...preState.errorObj,
                            passwordErr: true
                        }
                    }))
                } else {
                    this.setState((preState) => ({
                        errorObj: {
                            ...preState.errorObj,
                            passwordErr: false
                        }
                    }))
                }
                this.setState({ password: value });
                break;
            case "useraddress":
                if (value === "") {
                    this.setState((preState) => ({
                        errorObj: {
                            ...preState.errorObj,
                            addressErr: true
                        }
                    }))
                } else {
                    this.setState((preState) => ({
                        errorObj: {
                            ...preState.errorObj,
                            addressErr: false
                        }
                    }))
                }
                this.setState({ address: value });
                break;

            default:
                break;
        }

    }

    render() {
        console.log("==========>", this.state);
        return (
            <div className="container">
                <LoginCmp
                    handleChange={this.handleChange}
                    errors={this.state.errorObj}
                />
            </div>
        )
    }
}

export default Login;
