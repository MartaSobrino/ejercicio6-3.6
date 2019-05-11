import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    const valueInput = event.currenTarget.value;
    console.log(valueInput);
  }

  render(){
    return(
      <div>
        <textarea onChange={this.handleChange}></textarea>
        <p></p>
      </div>
    );
  }
}

export default App;
