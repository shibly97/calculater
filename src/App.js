import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          display : '',
          history : ''
      }
 
  }

  addSymbol = (event) => {
    var d= this.state.display;
    var i = event.target.value;
    // var regex1= (/[+-](?=1)/);
    var regex = (/[+ / - *]0$/);
    var r1 = /[+]$/;
    var r2 = /[-]$/;
    var r3 = /[*]$/;
    var r4 = /[/]$/;
    
    if(d.length === 1 && d==="0" && i!=="."){
      this.setState({display : i})}
      else if( (i==='-'|| i==='+'|| i==='/'|| i==='*') && (r1.test(d)||r3.test(d)||r4.test(d))){
     return undefined
      }
    else if(i=='.' && d.charAt(d.length-1) == '.' ){
      return undefined
    }
    else if(regex.test(d) && i!=="."){
      const newString = d.substring(0, d.length-1)
      this.setState({display: newString+i})
   
    }else{
      this.setState({display:d+i})
    
    }
      
  }

  clearOperator = () =>{
    this.setState({display : '0'})
  }

  equalOperator = () => {
    const realValue = eval(this.state.display)
    this.setState({display : realValue})
  }

  backOperator = () =>{
    const newSt = this.state.display.substring(0,this.state.display.length-1)
    this.setState({display:newSt})
  }
 
  render(){
      return(
          <div className="container" id='cal'>
              <p className="alert" id='display'>{this.state.display}</p>
 
              <button className="btn btn-primary" id='one' value='1' onClick={this.addSymbol}>1</button>
              <button className="btn btn-primary" id='two' value='2' onClick={this.addSymbol}>2</button>
              <button className="btn btn-primary" id='three' value='3' onClick={this.addSymbol}>3</button>
              <button className="btn btn-primary" id='four' value='4' onClick={this.addSymbol}>4</button>
              <button className="btn btn-primary" id='five' value='5' onClick={this.addSymbol}>5</button>
              <button className="btn btn-primary" id='six' value='6' onClick={this.addSymbol}>6</button>
              <button className="btn btn-primary" id='seven' value='7' onClick={this.addSymbol}>7</button>
              <button className="btn btn-primary" id='eight' value='8' onClick={this.addSymbol}>8</button>
              <button className="btn btn-primary" id='nine' value='9' onClick={this.addSymbol}>9</button>
              <button className="btn btn-primary" id='zero' value='0' onClick={this.addSymbol}>0</button>
              <button className="btn btn-primary" id='add' value='+' onClick={this.addSymbol}>+</button>
              <button className="btn btn-primary" id='subtract' value='-' onClick={this.addSymbol}>-</button>
              <button className="btn btn-primary" id='multiply' value='*' onClick={this.addSymbol}>*</button>
              <button className="btn btn-primary" id='divide' value='/' onClick={this.addSymbol}>/</button>
              <button className="btn btn-primary" id='decimal' value='.' onClick={this.addSymbol}>.</button>
 
              <button className="btn btn-primary" id='equals' value='=' onClick={this.equalOperator}>=</button>
              <button className="btn btn-primary" id='clear' value='=' onClick={this.clearOperator}>clear</button>
              <button className="btn btn-primary" id='back' value='=' onClick={this.backOperator}>back</button>
              
          </div>
      )
  }
 
 }
 

export default App;
