let fs = require('fs');
let _ = require('underscore');
let express = require('express');
let router = express.Router();
let validator = require('../lib/validation/schema-validator.middleware');
let Mongodb = require('../lib/storage/Mongodb');

let storage = new Mongodb();

const schemaDir = __dirname + "/../lib" ;

router.get('/', function(req, res, next) {
    res.json({
        "name": "service catalogue version: " + process.env.VERSION,
        "metadata": {
            "schemas": validator.schemas,
            "decommissioned-schemas": validator.decommissioned_schemas
        }
    });
});

router.get('/readiness', async (req, res, next) => {
    try {
        await storage.health();

        res.status(200)
            .send("OK");
    } catch (err) {
        res.status(200)
            .send(err);
    }
});

router.get('/health', async (req, res, next) => {
    await storage.health();

    res.status(200)
        .send("OK");
});

router.get('/liveness', (request, response) => {
    response.status(200)
        .send("OK");
});

module.exports = router;
