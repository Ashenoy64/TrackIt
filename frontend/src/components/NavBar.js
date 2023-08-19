import React from "react"
import '../styles/tailwind.css'

class NavBar extends React.Component{
    
    constructor(props)
    {
        super(props)
        this.state={
            isLoggedin:!this.props.logout
        }
    }

    redirect(to)
    {
        window.location.href="/"+to
    }

    logout()
    {
        window.localStorage.setItem('islogined','false')
        this.setState({isLoggedin:window.localStorage.getItem("islogined")})
        window.location.href="/"
    }
    render()
    {
        return(
           
            <div className="p-5 bg-primary border-b">
                <span className="text-xl font-bold text-white" onClick={()=>this.redirect('')}>Predictor</span> 
                <ul className="inline-flex float-right gap-8 text-l ">
                    {
                        this.state.isLoggedin?<><li className="p-2 w-24 text-center rounded-2xl  hover:bg-grey  text-white" onClick={()=>this.redirect('login')}>Login</li>
                        <li className="p-2  w-24  text-center rounded-2xl hover:bg-grey  text-white" onClick={()=>this.redirect('register')}>Register</li>
                        </> : <li className="p-2  w-24  text-center rounded-2xl hover:bg-grey  text-white" onClick={()=>this.logout()}>Logout</li>
                    }
                    
                </ul>
            </div>
            
        )
    }
}

export default NavBar;