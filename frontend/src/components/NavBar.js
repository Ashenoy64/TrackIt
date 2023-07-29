import React from "react"
import '../styles/tailwind.css'
import { Link} from 'react-router-dom';

class NavBar extends React.Component{
    
    redirect(to)
    {
        window.location.href="/"+to
    }
    render()
    {
        return(
           
            <div className="p-5 bg-primary border-b">
                <span className="text-xl font-bold"><Link to='/' className="link">Predictor</Link></span> 
                <ul className="inline-flex float-right gap-8 text-l ">
                    <li className="p-2 w-24 text-center rounded-2xl  hover:bg-grey "><Link to="/login" className="link">Login</Link></li>
                    <li className="p-2  w-24  text-center rounded-2xl hover:bg-grey "><Link to='/register' className="link">Register</Link></li>
                </ul>
            </div>
            
        )
    }
}

export default NavBar;