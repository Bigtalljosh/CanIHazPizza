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
        const response = await axios.get(`https://www.dominos.co.uk/storefindermap/storesearch?SearchText=${location}}`);
        let pizza = JSON.stringify(response.data);
        console.log(pizza);
        return pizza;
    } catch (error) {
        console.error(error);
    }
}

module.exports = router;