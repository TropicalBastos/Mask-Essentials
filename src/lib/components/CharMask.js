import React from 'react';

export default class CharMask extends React.Component{

    constructor(props){
        super(props);

        if(this.props.mode === undefined){
            this.mode = "alphabet";
        }else{
            switch(this.props.mode){
                case "alphabet":
                    this.mode = "alphabet";
                    break;
                case "special":
                    this.mode = "special";
                    break;
                case "both":
                    this.mode = "both";
                    break;
                case "email":
                    this.mode = "email";
                    break;
                default:
                    throw "Error: Invalid mode provided";
            }
        }

        this.state = {
            value : ""
        }

        this.maskChar = this.maskChar.bind(this);
    }

    maskChar(e){
        let currentString = e.target.value;
        let newString = "";

        switch(this.mode){
            case "special":
                newString = currentString.replace(/[~@#$^*()_+=[\]{}|\\,.?: -]/g, "");
                break;
            case "both":
                newString = currentString.replace(/[^a-zA-Z~@#$^*()_+=[\]{}|\\,.?: -'\-/]/g, "");
                break;
            case "email":
                newString = currentString.replace(/[^abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&'*@+-/=?^_`{|}~.]/g, "");
                break;
            default:
                newString = currentString.replace(/[^a-zA-Z]/g, "");
                break;
        }

        this.setState({ value: newString });
    }

    render(){
        return(
            <input {...this.props} value={this.state.value} onChange={this.maskChar} />
        )
    }

}