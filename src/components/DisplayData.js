import { response } from "express";
import React from "react";

class DisplayData extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            list:[]
        }

        this.callAPI = this.callAPI.bind(this)
        this.callAPI();
    }

    callAPI(){
        fetch("http://localhost:3001/karyawan").then(
            (response)=>response.json()
        ).then((data)=>{
            console.log(data)
        })
    }

    render(){
        return(
            <div>

            </div>
        )
    }
}

export default DisplayData;