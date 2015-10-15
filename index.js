'use strict';
var Filter = require('broccoli-filter');
var defeatureify = require('defeatureify');

function DefeatureifyFilter(inputTree, options) {
	if (!(this instanceof DefeatureifyFilter)) {
		return new DefeatureifyFilter(inputTree, options);
	}

	Filter.call(this, inputTree);

	this.inputTree = inputTree;
	this.options = options || {};
	this.options.enabled = options.enabled || options.features;
}

DefeatureifyFilter.prototype = Object.create(Filter.prototype);
DefeatureifyFilter.prototype.constructor = DefeatureifyFilter;

DefeatureifyFilter.prototype.extensions = ['js'];
DefeatureifyFilter.prototype.targetExtension = 'js';

DefeatureifyFilter.prototype.processString = function (str) {
	return defeatureify(str, this.options);
};

module.exports = DefeatureifyFilter;
