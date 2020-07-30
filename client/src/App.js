import React, { useState, useEffect } from 'react';
import logo from './pizza.png';
import './App.css';
import { Table } from './table.js';

const App = (props) => {
    const [location, setLocation] = useState('birmingham');
    const [tableData, setTableData] = useState([]);

    async function callPizzaApi(location) {
        const res = await fetch(`http://localhost:9000/pizza?location=${location}`);
        const body = await res.json();
        setTableData(body["collectionStores"]);
    }

    useEffect(() => { 
        callPizzaApi('birmingham');
    }, []);

    function handleChange(event) {
        setLocation(event.target.value);
    }

    function handleSubmit(event) {
        callPizzaApi(location);
        event.preventDefault();
    }

    return (
        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Can I Haz Pizza?</h1>
            </header>
            <div>
            <form onSubmit={handleSubmit}>
                <label>
                Location:
                <input type="text" value={location} onChange={handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
            </div>
            <div>
                <Table data={tableData}/>
            </div>
        </div>
    );
}

export default App;
