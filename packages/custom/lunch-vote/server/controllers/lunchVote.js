'use strict';

/**
 * Module dependencies.
 */

/*
var mongoose = require('mongoose'),
    LunchVote = mongoose.model('LunchVote'),
    async = require('async'),
    config = require('meanio').loadConfig(),
    templates = require('../template');
*/


exports.getList = function(req, res, next){
    var list = ['d', 'e'];
    console.log('getList', list);
    res.json(list);
};