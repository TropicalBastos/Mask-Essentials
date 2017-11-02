import React from 'react';

export default class IsoDateMask extends React.Component{

    constructor(props){
        super(props);

        if(this.props.separator === undefined)
            this.separator = "/";
        else
            this.separator = this.props.separator;

        this.state = {
            value: ""
        }

        //each fraction of the date regex pattern
        this.oneThird = /^[0-9]{4}$/;
        this.twoThirds = new RegExp("^[0-9]{4}\\" + this.separator + "[0-9]{2}$");
        this.fullPattern = new RegExp("(^[0-9]{4}\\" + this.separator 
        + "[0-9]{2}\\" + this.separator + "[0-9]{2}).*");
        this.fullPatternNoSeparator = /^[0-9]{4}[0-9]{2}[0-9]{2}.*/;
        this.maskerPattern = new RegExp("[^0-9\\" + this.separator + "]", "g");

        this.maskDate = this.maskDate.bind(this);
        this.correctFormat = this.correctFormat.bind(this);
    }

    correctFormat(){
        let inputDate = this.state.value;
        if(inputDate.match(this.oneThird))
            inputDate += this.separator;
        if(inputDate.match(this.twoThirds))
            inputDate += this.separator;
        if(inputDate.match(this.fullPattern))
            inputDate = inputDate.replace(this.fullPattern, "$1");
        if(inputDate.match(this.fullPatternNoSeparator)){
            let position1 = 4, position2 = 7;
            let out1 = [inputDate.slice(0, position1), 
                this.separator, inputDate.slice(position1)].join('');
            inputDate = [out1.slice(0, position2), 
                this.separator, out1.slice(position2)].join('');
        }
        this.setState({ value: inputDate });
    }

    maskDate(e){
        e.preventDefault();
        var inputDate = e.target.value;
        inputDate = inputDate.replace(this.maskerPattern, "");
        setTimeout(this.correctFormat, 300);
        this.setState({ value: inputDate });
    }

    render(){
        return(
            <input type="text" value={this.state.value} onChange={this.maskDate} />
        );
    }

}