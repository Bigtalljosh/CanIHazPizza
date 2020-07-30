import React, { Component } from 'react';
import logo from './pizza.png';
import './App.css';
import Table from './table.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  apiResponse: "",
                        tableData:[
                            {'fruit': 'Apple', 'cost': 100},
                            {'fruit': 'Orange', 'cost': 50},
                            {'fruit': 'Banana', 'cost': 35}
                        ]
                      };
    }
    
    callPizzaApi() {          
        fetch("http://localhost:9000/pizza")
            .then(res => res.text())
            .then(res => this.formatNicely(res))
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }
    
    componentDidMount() {
        this.callPizzaApi();
    }

    formatNicely(result)
    {
        let x = JSON.parse(result);
        this.setState({ tableData: x["collectionStores"] })
    }

    render(){
        return (
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Can I Haz Pizza?</h1>
                </header>
                <div>
                    <Table data={this.state.tableData}/>
                </div>

                <p className="App-intro">{this.state.apiResponse}</p>
            </div>
        );
    }
}

export default App;