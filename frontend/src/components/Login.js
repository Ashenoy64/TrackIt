import React from "react";
import NavBar from "./NavBar";

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      email: "",
      pass: "",
      cpass: "",
      error: 1,
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
      <>
        <NavBar logout={false}/>
        <div className="text-black  w-[90%] mx-auto">

          <div className="flex flex-col p-4 md:w-1/4  w-3/4 mx-auto rounded-lg bg-indigo6 outline-double outline-2 h-[300px] outline-white my-24 ">
            {error ?
              <div className="text-center" id="error" >
                <p>{this.state.msg}</p>
              </div> : ""}
            <div className="text-center font-bold text-white text-xl mb-10">
              <button type="button" className="" >
                Predictor
              </button>
            </div>
            <form id="login" className="flex flex-col justify-center w-full gap-4 py-8" action="__blank" method="POST" onSubmit={this.handleLogSubmit}>
              <input
                type="email"
                className="text-center w-56 mx-auto rounded-lg"
                placeholder="Email ID"
                id="email_l"
                onChange={e => this.setState({ email: e.target.value })}
                required
              />
              <input
                type="password"
                className="text-center w-56 mx-auto rounded-lg"
                placeholder="Password"
                id="pass_l"
                onChange={e => this.setState({ pass: e.target.value })}
                required
              />
              <button type="submit" className=" rounded-full outline mx-auto outline-white w-1/2 bg-yellowgreen" id="login_submit">
                Login
              </button>
            </form>
          </div>

        </div>
      </>

    )
  }
}


export default Login;
