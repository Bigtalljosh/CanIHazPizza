import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    
    callAPI(location) {
        var myHeaders = new Headers();
        myHeaders.append("Access-Control-Allow-Origin", "*");

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };
          
        fetch(`https://www.dominos.co.uk/storefindermap/storesearch?SearchText=${location}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
    
    componentWillMount() {
        this.callAPI('birmingham');
    }

    render(){
        return (
            <div className="App">
                <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to Pizza Finder</h1>
                </header>
                <p className="App-intro">{this.state.apiResponse}</p>
            </div>
        );
    }
}

export default App;