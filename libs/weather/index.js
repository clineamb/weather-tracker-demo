//  API LOGIC FOR WEATHER MEASUREMENTS

var coll    = require('../collection')
,   debug   = require('debug')('api:weather')
,   _       = require('lodash')
;

module.exports = {
    addMeasurement: function(req, res, next) {
        var fields = _.omit(fields, 'timestamp')

        if(!coll.addEntry(fields.timestamp, fields)) { // sends through true if OK
            return res.sendStatus(400);
        }

        debug(">> collection", coll.toJSON());

        res.append("Location", "/measurements/"+fields.timestamp);
        res.sendStatus(201);
    }
};