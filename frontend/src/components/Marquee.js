import React from "react"
import '../styles/tailwind.css'


var str = "Alnylam Pharmaceuticals, Inc. ALNY $212.72 ▲2.03 | Nordstrom Inc. JWN $22.13 ▲2.03 | Intra-Cellular Therapies, Inc. ITCI $52.23 ▲2.03 | Molina Healthcare, Inc. MOH $327.08 ▲2.03 | Buckle, Inc., The BKE $44.04 ▲2.02 | Boeing Co. BA $178.36 ▲2.01  | Infosys Ltd. INFY $19.92 ▲2.00 | NuScale Power Corp SMR $11.22 ▲2.00 | Pebblebrook Hotel Trust PEB $16.32 ▲2.00 | Ameresco Inc  AMRC $64.89 ▲1.98 | UGI Corp. UGI $39.71 ▲1.98 |  AeroVironment Inc AVAV $92.08 ▲1.98 | NorthWestern Corp NWE $58.03 ▲1.97 |  Varonis Systems Inc VRNS $21.21  ▲1.97"



class Marquee extends React.Component {
    constructor(props) {
        super(props);
        var data = str;
        this.state = {
            data: data,
        }
    }
    render() {
        return (
            <marquee behavior="" direction="" className="font-bold mb-12 border" style={{ color: "red ", fontSize: "20px", backgroundColor: "#00A4CCFF", height: "50px", padding: "12px" }} >{this.state.data}</marquee>
        )
    }
}


export default Marquee;