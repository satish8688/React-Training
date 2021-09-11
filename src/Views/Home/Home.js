import React, { Component } from 'react';
import Axios from 'axios';

export class Home extends Component {

    state = {
        userList: [],
        isOpen: false,
        singleOUser: {}
    }

    componentDidMount() {
        this.getUseList();
    }

    getUseList = () => {
        const url = 'https://reqres.in/api/users?page=2';
        Axios.get(url)
            .then((response) => {
                this.setState({
                    userList: response.data
                })
            }).catch((error) => {
                console.log("---------->errors", error);
            })
    }

    getSingleUser = (val) => {
        console.log("getSingleUser------>", val);
        this.setState({
            isOpen: true,
            singleOUser: val
        })
    }

    close = () => {
        this.setState({
            isOpen: false
        })
    }

    render() {
        console.log(this.state.singleOUser);
        return (
            <div className="container">
                <div className="boxlist">
                    {this.state.userList.data && this.state.userList.data.length > 0
                        ? this.state.userList.data.map((item, index) => <div className="box" key={index} onClick={() => this.getSingleUser(item)}>
                            <img src={item.avatar} alt="" className="box-img" />
                            <div className="box-content">
                                <p className="box-rating">* {item.id}</p>
                                <h5 className="box-heading">{item.first_name + ' ' + item.last_name}</h5>
                                <p className="box-rating box-rating2">{item.email}</p>
                                <div className="box-footer">
                                    <button className="box-btn">Add to cart</button>
                                    <span className="box-cost">{item.last_name.charAt(0)}</span>
                                </div>
                            </div>
                        </div>)
                        : 'Data not available'}
                </div>

                <div className="modal" style={{ display: this.state.isOpen === true ? 'flex' : 'none' }}>
                    <div className="main-modal">
                        <button className="close" onClick={this.close}>X</button>
                        <div className="box" style={{width: '100%', height: 'auto', boxShadow: 'none'}}>
                            <img src={this.state.singleOUser.avatar} alt="" className="box-img" />
                            <div className="box-content">
                                <p className="box-rating">* {this.state.singleOUser.id}</p>
                                <h5 className="box-heading">{this.state.singleOUser.first_name + ' ' + this.state.singleOUser.last_name}</h5>
                                <p className="box-rating box-rating2">{this.state.singleOUser.email}</p>
                                <div className="box-footer">
                                    <button className="box-btn">Add to cart</button>
                                    <span className="box-cost">{this.state.singleOUser.last_name && this.state.singleOUser.last_name.charAt(0)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Home;
