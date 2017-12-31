'use strict';
const Filter = require('broccoli-filter');
const defeatureify = require('defeatureify');

module.exports = class extends Filter {
	constructor(inputTree, options) {
		super(inputTree);
		this.inputTree = inputTree;
		this.options = options || {};
		this.options.enabled = options.enabled || options.features;
	}

	get extensions() {
		return ['js'];
	}

	get targetExtension() {
		return 'js';
	}

	processString(text) {
		return defeatureify(text, this.options);
	}
};
