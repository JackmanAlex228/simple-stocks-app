import React, { Component } from 'react';
import { render } from 'react-dom'

export default class Field extends Component {
    constructor(props) {
        super(props);
  
        this.state = { symbol: '' }
    }   
  
    submitForm = (e) => {
        e.preventDefault();
        this.props.handleData(this.state)
    } 
  
    handleNameChange = (e) => {
        console.log(e.target.value);
        this.setState({
            symbol: e.target.value
        });
    }
  
    render() {
        return (
            <div>
                <form class="ui form">
                    <div class="field">
                        <label>Enter a stock symbol</label>
                        <input
                            type="text"
                            className="input"
                            name="symbol"
                            onChange={this.handleNameChange}
                            placeholder="AAPL" />
                    </div>
                    <button class="ui button" type="submit" onClick={this.submitForm}>Submit</button>
                </form>
            </div>
        )
    }
}