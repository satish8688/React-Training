import React, { Component } from "react";

class Dribble extends Component {

    render() {
        return (<>
            {/* <!-- HOME --> */}
            <section className="home">
                <img src="images/dog.png" className="home-img" alt="no image" />
                {/* <!-- HEADER --> */}
                <header className="header">
                    <ul className="home-header">
                        <li className="home-header-list">
                            <a href="" className="home-header-link">About</a>
                        </li>
                        <li className="home-header-list">
                            <a href="" className="home-header-link">About</a>
                        </li>
                        <li className="home-header-list">
                            <a href="" className="home-header-link">About</a>
                        </li>
                    </ul>
                    <div className="home-header-middle">
                        <h4 className="home-header-title">Fashion</h4>
                        <p className="home-header-subtitle">Best fashion dsfds</p>
                    </div>
                    <ul className="home-header">
                        <li className="home-header-list">
                            <a href="" className="home-header-link">About</a>
                        </li>
                        <li className="home-header-list">
                            <a href="" className="home-header-link">About</a>
                        </li>
                        <li className="home-header-list">
                            <button className="home-header-icon">+</button>
                        </li>
                    </ul>
                </header>

                {/* <!-- HOME BODY --> */}
                <div className="home-box">
                    <h1 className="home-title">
                        The way <br /> discerning <br /> <span>lifestyle</span>
                    </h1>
                    <p className="home-content">Lorem ipsum dolor sit amet,  consectetur adipisicing <br />
                        elit. Voluptatum velit cumque possimus magni reprehenderit eveniet.</p>
                    <a href="" className="home-btn">
                        <span>-</span>
                        Explore now
                    </a>
                </div>
                <ul className="right-list">
                    <li className="right-list-li">
                        <a href="" className="right-list-link">Lorem ipsum dolor sit.</a>
                    </li>
                    <li className="right-list-li">
                        <a href="" className="right-list-link">asdasd</a>
                    </li>
                    <li className="right-list-li">
                        <a href="" className="right-list-link">Lorem, ipsum dolor.</a>
                    </li>
                    <li className="right-list-li">
                        <a href="" className="right-list-link">asdasd</a>
                    </li>
                    <li className="right-list-li">
                        <a href="" className="right-list-link">Lorem.</a>
                    </li>
                    <li className="right-list-li">
                        <a href="" className="right-list-link">Lorem, ipsum.</a>
                    </li>
                    <li className="right-list-li">
                        <a href="" className="right-list-link">Lorem, ipsum.</a>
                    </li>
                </ul>
            </section>
        </>)
    }

}

export default Dribble;