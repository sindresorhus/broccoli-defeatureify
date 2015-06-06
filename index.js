'use strict';

var md5Hex = require('md5-hex');
var PersistentFilter = require('broccoli-persistent-filter');
var defeatureify = require('defeatureify');

function DefeatureifyFilter(inputTree, options) {
	if (!(this instanceof DefeatureifyFilter)) {
		return new DefeatureifyFilter(inputTree, options);
	}

	PersistentFilter.call(this, inputTree, options);

	this.inputTree = inputTree;
	this.options = options || {};
	this.options.enabled = options.enabled || options.features;
}

DefeatureifyFilter.prototype = Object.create(PersistentFilter.prototype);
DefeatureifyFilter.prototype.constructor = DefeatureifyFilter;

DefeatureifyFilter.prototype.extensions = ['js'];
DefeatureifyFilter.prototype.targetExtension = 'js';

DefeatureifyFilter.prototype.processString = function (str) {
	return defeatureify(str, this.options);
};

DefeatureifyFilter.prototype.cacheKeyProcessString = function (string, relativePath) {
	return md5Hex(string);
};

DefeatureifyFilter.prototype.baseDir = function () {
	return __dirname;
};

module.exports = DefeatureifyFilter;
