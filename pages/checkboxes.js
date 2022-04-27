import React, { Component } from "react";
import Layout from '../components/layout'
import Link from 'next/link'

class App extends Component {

  constructor() {
    super();

    this.state = {
      color: 'green'
    };

    this.onRadioChange = this.onRadioChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  onRadioChange = (e) => {
    this.setState({
      color: e.target.value
    });
  }

  onSubmit = (e) => {
    //e.preventDefault();
    console.log(this.state);
    this.props.history.push('/')
  }

  render() {
    return (
      <Layout>
      <h1>Participant information sheet - Online studies of metacognition in 
          human-robot collaboration</h1>
      <p>
        This study has been approved by the Oxford Research Ethics Committee; 
          Project ID Number: <strong>1260/003</strong>
      </p>

      <div className="App">
        <form onSubmit={this.onSubmit}>
          <strong>Select Color:<br/></strong>

          
            
              <label>
                <input
                  type="radio"
                  value="red"
                  checked={this.state.color === "red"}
                  onChange={this.onRadioChange}
                />
                <span>Red</span>
              </label>
            

            
              <label>
                <input
                  type="radio"
                  value="green"
                  checked={this.state.color === "green"}
                  onChange={this.onRadioChange}
                />
                <span>Green</span>
              </label>
            

            
              <label>
                <input
                  type="radio"
                  value="blue"
                  checked={this.state.color === "blue"}
                  onChange={this.onRadioChange}
                />
                <span>Blue</span>
              </label>
            

            
              <label>
                <input
                  type="radio"
                  value="orange"
                  checked={this.state.color === "orange"}
                  onChange={this.onRadioChange}
                />
                <span>Orange</span>
              </label>
            

            
              <label>
                <input
                  type="radio"
                  value="purple"
                  checked={this.state.color === "purple"}
                  onChange={this.onRadioChange}
                />
                <span>Purple<br/></span>
              </label>
            
          

          <button type="submit">Choose Color</button>
        </form>
      </div>
      </Layout>
    );
  }
}

export default App;