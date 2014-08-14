'use strict';
module.exports = require('./')('fixture', {
	enableStripDebug: true,
	debugStatements: [
		'Ember.warn',
		'Ember.assert',
		'Ember.deprecate',
		'Ember.debug',
		'Ember.Logger.info'
	]
});
