var express = require('express');
var router = express.Router();
const axios = require('axios');

router.get('/', async function(req, res, next) {
    let location = req.query.location;
    let details = await getPizza(location);
    res.send(details);
});

async function getPizza(location) {
    try {
        const query = new URLSearchParams();
        query.set('SearchText', location);
        let response = await axios.get(`https://www.dominos.co.uk/storefindermap/storesearch?${query.toString()}`);
        let pizza = JSON.stringify(response.data);
        return pizza;
    } catch (error) {
        console.error('Error getting pizza', error);
    }
}

module.exports = router;