import React from "react";
import "../styles/Login.css";
//import axios from "axios";

class Register extends React.Component {
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
    this.handleRegesSubmit = this.handleRegesSubmit.bind(this)
   
  }
  

  handleRegesSubmit(e) {
    e.preventDefault()
    console.table(this.state)
    if (this.state.pass != this.state.cpass) {
        this.setState({ error: 1, msg: "Incorrect Password" })
    }
    else {
        fetch("http://127.0.0.1:5000/db/register", {
            method: 'POST',
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify({
                username: this.state.username,
                email: this.state.email,
                password: this.state.pass
            })
        }).then(res => res.json()).then(data => {
            if (data.error == "exists") {
                this.setState({ error: 1, msg: "User With email already exists" })
            }
            else if (data.error) {
                this.setState({ error: 1, msg: "Something Went wrong" })
            }
            else {
                window.location.href = '/login'
            }
        })
    }
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
              <button type="button" className="toggle-btn">
                Predictor
              </button>
            </div>
            <form id="signup" className="input-group " onSubmit={this.handleRegesSubmit}>
              <input
                type="text"
                className="input-field"
                placeholder="Username"
                id="user_s"
                onChange={e => this.setState({ username: e.target.value })}
                required
              />
              <input
                type="text"
                className="input-field"
                placeholder="Email ID"
                id="email_s"
                onChange={e => this.setState({ email: e.target.value })}
                required
              />
              <input
                type="password"
                className="input-field"
                placeholder="Create Password"
                id="epass_s"
                onChange={e => this.setState({ pass: e.target.value })}
                required
              />
              <input
                type="password"
                className="input-field"
                placeholder="Confirm Password"
                id="rpass_s"
                onChange={e => {
                  this.setState({ cpass: e.target.value })
                }}
                required
              />

              <button type="submit" className="submit-btn left-48 mt-16" >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Register;

<style scoped>

</style>