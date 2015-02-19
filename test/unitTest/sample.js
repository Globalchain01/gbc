#!/usr/local/bin/node --harmony
'use strict';

var co = require('co');
var assert = require('assert');
var ugrid = require('../../lib/ugrid-context.js')();
var ml = require('../../lib/ugrid-ml.js');

co(function *() {
	yield ugrid.init();

	var v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	var frac = 0.4;
	var seed = 1;

	var points = yield ugrid.parallelize(v).sample(frac, seed).collect();

	console.log(points)

	ugrid.end();
})();
