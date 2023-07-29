import React from "react";
import "../styles/Login.css";
//import axios from "axios";

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            email: "",
            pass: "",
            cpass: "",
            error: 0,
            msg: ""
        }
        this.handleLogSubmit = this.handleLogSubmit.bind(this)
    }

    handleLogSubmit(e) {
        e.preventDefault()
        const { email, pass } = this.state
        console.log(email, pass)
    
        fetch("http://127.0.0.1:5000/db/login", {
          method: 'POST',
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*"
          },
          body: JSON.stringify({
            email: this.state.email,
            password: this.state.pass
          })
        }).then(res => res.json()).then(data => {
          console.log(data)
    
          if (data.error) {
            this.setState({ error: 1, msg: data.error })
          }
          else if (data.data) {
            window.localStorage.setItem("token", data.data)
            window.location.href = "/dashboard"
          }
          else {
            this.setState({ error: 1, msg: "Something Went wrong!" })
          }
        })
      }
    render() {
        const error = this.state.error
        return (
            <div className="text-black">
                <div className="c1">
                    <div className="form-box">
                        {error ?
                            <div className="p-2  text-center text-orange bg-yellowgreen rounded-md mt-3 font-bold text-lg" id="error" >
                                <p>{this.state.msg}</p>
                            </div> : ""}
                        <div className="button-box">
                            <div id="btn"></div>
                            <button type="button" className="toggle-btn" >
                                Predictor
                            </button>

                        </div>
                        <form id="login" className="input-group" action="__blank" method="POST" onSubmit={this.handleLogSubmit}>
                            <input
                                type="email"
                                className="input-field"
                                placeholder="Email ID"
                                id="email_l"
                                onChange={e => this.setState({ email: e.target.value })}
                                required
                            />
                            <input
                                type="password"
                                className="input-field"
                                placeholder="Password"
                                id="pass_l"
                                onChange={e => this.setState({ pass: e.target.value })}
                                required
                            />
                            <button type="submit" className="submit-btn my-6" id="login_submit">
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


export default Login;
