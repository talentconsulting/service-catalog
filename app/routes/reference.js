let express = require('express');
let router = express.Router();
let mappings = require('../lib/mappings');
let serviceDomains = require('../lib/validation/servicename-validator.middleware');

router.get('/teams', (request, response) => {
    response.json(mappings.getTeams());
});

router.get('/pillars', (request, response) => {
    response.json(mappings.getPillars());
});

router.get('/domains', (request, response) => {
    response.json(new serviceDomains().domains);
});

module.exports = router;
