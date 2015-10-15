#!/usr/bin/env node

var ugrid = require('ugrid');

var uc = ugrid.context(function () {
	console.log("ugrid ready")

	uc.parallelize([1, 2, 3, 4])
	.map(function (x) {
		//return x + 1;
		return wrong(x);
	}).collect(function (err, res) {
		console.log(res)
		process.exit(0);
	});
});
