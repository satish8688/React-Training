import React from 'react'

const LoginCmp = (props) => {
    return (
        <form className="form">
            <div className="group">
                <label htmlFor="" className="label">id</label>
                <input
                    type="number"
                    name="username"
                    onChange={props.handleChange}
                    className="inp"
                    placeholder="Enter id" required />
                {props.errors.nameErr ? <p style={{ color: "red" }}>Maxlenth should be 6 chars</p> : null}

            </div>
            <div className="group">
                <label htmlFor="" className="label">Password</label>
                <input
                    type="password"
                    name="userpassword"
                    onChange={props.handleChange}
                    className="inp"
                    placeholder="Enter password"
                    required />
                {props.errors.passwordErr ? <p style={{ color: "red" }}>Password required</p> : null}
            </div>
            <div className="group">
                <label htmlFor="" className="label">Address</label>
                <input
                    type="text"
                    name="useraddress"
                    onChange={props.handleChange}
                    className="inp"
                    placeholder="Enter useraddress"
                    required />
                {props.errors.addressErr ? <p style={{ color: "red" }}>Address Required</p> : null}
            </div>
            <div>
                <button
                    className="btn"
                    type="button"
                    // disabled={props.errors.nameErr || props.errors.passwordErr || props.errors.addressErr}
                    disabled={!props.btnDisable}
                    onClick={props.handleSubmit}>
                    Submit
                </button>
                <button className="btn" type="reset">Clear</button>
            </div>
        </form>
    )
}

export default LoginCmp;
