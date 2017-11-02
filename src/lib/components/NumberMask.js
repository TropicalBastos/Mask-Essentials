import React from 'react';

export default class NumberMask extends React.Component{

    constructor(props){
        super(props);
        var value = "";
        var type = (props.type === undefined) ? "integer": props.type;

        if(type !== "integer" && type !== "float")
            throw "Error: type must be either integer or float!";

        this.type = type;
        this.state = { value };
        this.maskNumbers = this.maskNumbers.bind(this);
    }

    parseNumber(n){
        if(this.type === 'integer')
            return parseInt(n);
        if(n.match(/^.*\..*$/)){
            if(n.match(/.*\..*\./))
                return parseFloat(n);
            return n;
        }
        return parseFloat(n);
    }

    maskIntegerOrFloat(currentString){
        if(this.type === 'integer')
            return currentString.replace(/[^0-9]/g, "");
        
        //if not integer its a float
        return currentString.replace(/[^0-9.]/g, "");
        
    }

    maskNumbers(e){
        var currentString = e.target.value;
        var masked = this.maskIntegerOrFloat(currentString);
        if(masked === "" && this.zero)
            masked = 0;
        else if(masked === "" && !this.zero)
            masked = "";
        else
            masked = this.parseNumber(masked);
        this.setState({ value: masked });
    }

    render(){
        return(
            <input {...this.props} value={this.state.value} onChange={this.maskNumbers} />
        );
    }

}