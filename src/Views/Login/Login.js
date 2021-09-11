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
        const isEmpty = value !== "" ? false : true;
        switch (name) {
            case "username":
                this.setState((preState) => ({
                    name: value,
                    errorObj: {
                        ...preState.errorObj,
                        nameErr: isEmpty
                    }
                }))
                // this.setState({
                //     name: value
                // });
                break;
            case "userpassword":
                this.setState((preState) => ({
                    password: value,
                    errorObj: {
                        ...preState.errorObj,
                        passwordErr: isEmpty
                    }
                }))
                // this.setState({ password: value });
                break;
            case "useraddress":
                this.setState((preState) => ({
                    address: value,
                    errorObj: {
                        ...preState.errorObj,
                        addressErr: isEmpty
                    }
                }))
                // this.setState({ address: value });
                break;

            default:
                break;
        }

    }

    handleSubmit = () => {
        // console.log("on submit", this.state);
        const { errorObj, name, password, address } = this.state;
        if (name && password && address && (!errorObj.nameErr && !errorObj.passwordErr && !errorObj.addressErr)) {
            console.log("===========success");
            this.props.history.replace('/home');
        } else {
            console.log("-------------please check the input errors");
        }
    }

    render() {
        // console.log("==========>", this.state);
        const { errorObj, name, password, address } = this.state;
        const isInputEmpty = name && password && address;
        const isDisabled = (!errorObj.nameErr && !errorObj.passwordErr && !errorObj.addressErr);
        return (
            <div className="container">
                <LoginCmp
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    errors={errorObj}
                    btnDisable={isInputEmpty && isDisabled}
                />
            </div>
        )
    }
}

export default Login;
