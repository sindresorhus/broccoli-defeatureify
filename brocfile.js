'use strict';
const Defeatureify = require('.');

module.exports = new Defeatureify('fixture', {
	enableStripDebug: true,
	debugStatements: [
		'Ember.warn',
		'Ember.assert',
		'Ember.deprecate',
		'Ember.debug',
		'Ember.Logger.info'
	]
});
