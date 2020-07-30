import React, { Component } from 'react';
import logo from './pizza.png';
import './App.css';
import Table from './table.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {  apiResponse: "",
                        location: "birmingham",
                        tableData:[
                            {'fruit': 'Apple', 'cost': 100},
                            {'fruit': 'Orange', 'cost': 50},
                            {'fruit': 'Banana', 'cost': 35}
                        ]
                      };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    callPizzaApi() {     
        console.log(`calling pizza with ${this.state.location}`);
        fetch(`http://localhost:9000/pizza?location=${this.state.location.toUpperCase()}`)
            .then(res => res.text())
            .then(res => this.formatNicely(res))
            .catch(err => err);
    }
    
    componentDidMount() {
        this.callPizzaApi();
    }

    formatNicely(result)
    {
        console.log('calling formatting');
        let x = JSON.parse(result);
        console.log(x);
        this.setState({ tableData: x["collectionStores"] })
    }

    handleChange(event) {
        this.setState({location: event.target.value});
    }

    handleSubmit(event) {
        console.log('ping');
        this.callPizzaApi(this.state.location);
        event.preventDefault();
    }

    render(){
        return (
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Can I Haz Pizza?</h1>
                </header>
                <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                    Location:
                    <input type="text" value={this.state.location} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                </div>
                <div>
                    <Table data={this.state.tableData}/>
                </div>

                <p className="App-intro">{this.state.apiResponse}</p>
            </div>
        );
    }
}

export default App;