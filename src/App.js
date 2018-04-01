import React, { Component } from 'react';

class App extends Component {
    state = {
        displayValue: '0',
        inputValue: 0,
        };

    handleChange= (e) =>{
        this.setState({inputValue: e.target.value})
    }

    //function to convert Roman Numeral into Integer based on Input numeral
    convertToNumber(roman){
        if(roman == null) return -1;
        var number = 0;
        for(var i=0; i<roman.length; i++){
            var curr = this.charToInt(roman.charAt(i));
            var next = this.charToInt(roman.charAt(i+1));

            if(curr < next){
                number = number-curr;
                this.setState({
                    displayValue: number
            });

            }else{
                number = number + curr;
                this.setState({
                    displayValue: number
            });

            }
        }
    }

    //function which reads single roman symbol and returns corresponding integer value
    charToInt(c) {
        switch (c){
            case 'I': return 1;
            case 'V': return 5;
            case 'X': return 10;
            case 'L': return 50;
            case 'C': return 100;
            case 'D': return 500;
            case 'M': return 1000;
            default: return -1;
        }
    }

  render() {
    return (
      <div>
          <h1>Convert to Number</h1>
          Enter Roman Numeral: <input type="text" value = {this.state.inputValue} onChange={(e) => this.handleChange(e)} /> <br/><br/><br/>
          <button onClick={()=>this.convertToNumber(this.state.inputValue)}>Submit</button><br/><br/>
            Integer is {this.state.displayValue}
      </div>
    );
  }
}

export default App;
