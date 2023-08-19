import React from "react";
import NavBar from "./NavBar";

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
    if (this.state.pass !== this.state.cpass) {
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
        if (data.error === "exists") {
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
      <>
        <NavBar logout={false} />      <div className="text-black  w-[90%] mx-auto">

          <div className="flex flex-col p-4 md:w-1/4  w-3/4 mx-auto rounded-lg bg-indigo6 outline-double outline-2 h-[400px] outline-white my-24">
            {error ?
              <div className="" id="error" >
                <p>{this.state.msg}</p>
              </div> : ""}
            <div className="text-center font-bold text-white text-xl mb-10">
              <button type="button" className="toggle-btn">
                Predictor
              </button>
            </div>
            <form id="signup" className="flex flex-col justify-center w-full gap-4 py-8 " onSubmit={this.handleRegesSubmit}>
              <input
                type="text"
                className="text-center w-56 mx-auto rounded-lg"
                placeholder="Username"
                id="user_s"
                onChange={e => this.setState({ username: e.target.value })}
                required
              />
              <input
                type="text"
                className="text-center w-56 mx-auto rounded-lg"
                placeholder="Email ID"
                id="email_s"
                onChange={e => this.setState({ email: e.target.value })}
                required
              />
              <input
                type="password"
                className="text-center w-56 mx-auto rounded-lg"
                placeholder="Create Password"
                id="epass_s"
                onChange={e => this.setState({ pass: e.target.value })}
                required
              />
              <input
                type="password"
                className="text-center w-56 mx-auto rounded-lg"
                placeholder="Confirm Password"
                id="rpass_s"
                onChange={e => {
                  this.setState({ cpass: e.target.value })
                }}
                required
              />

              <button type="submit" className="rounded-full outline mx-auto outline-white w-1/2 bg-yellowgreen" >
                Login
              </button>
            </form>
          </div>
        </div>
      </>

    )
  }
}

export default Register;

<style scoped>

</style>