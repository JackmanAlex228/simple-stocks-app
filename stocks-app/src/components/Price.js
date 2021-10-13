import React, { Component } from 'react';
import { render } from 'react-dom';
import Field from './Field';

export default class Price extends Component {
    constructor(props) {
        super(props);

        this.state = {
            symbol: 'AAPL',
            price: ''
        };
    }

    componentDidMount() {
        this.fetchStock(this.state.symbol);
    }

    fetchStock(symbol) {
        const pointerToThis = this;
        const API_KEY = '9RJIYMHBL5L0GANO';
        let API_CALL = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`;
        let stockPriceFunction = '';

        fetch(API_CALL)
            .then(
                function(response) {
                    return response.json();
                }
            )
            .then(
                function(data) {
                    stockPriceFunction = data['Global Quote']['05. price'];
                    pointerToThis.setState({
                        price: stockPriceFunction
                    })
                }
            )
    }

    handleParentData = (formModel) => {
        console.log(formModel);

        this.setState({
            ...formModel,
            price: this.fetchStock(formModel.symbol)
        });
    }


    render() {
        return (
            <div>
                <Field handleData={this.handleParentData}/>
                <br />
                <h1>Stock price for {this.state.symbol}</h1>
                <h2>${this.state.price}</h2>
          </div>
        )
    }
}