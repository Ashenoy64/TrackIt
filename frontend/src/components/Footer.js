import React from "react";
import '../styles/tailwind.css'

class Footer extends React.Component {
    render() {
        return (
            <div className="flex flex-row justify-evenly bg-black text-red p-8 mt-44">
                <div>
                    Avanish Shenoy
                </div>
                <div>
                    Charutha
                </div>
                <div>
                    B Monish Moger
                </div>
            </div>
        )
    }
}

export default Footer;