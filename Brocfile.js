'use strict';
module.exports = function (broccoli) {
	return require('./index')(broccoli.makeTree('fixture'), {
		enableStripDebug: true,
		debugStatements: [
			'Ember.warn',
			'Ember.assert',
			'Ember.deprecate',
			'Ember.debug',
			'Ember.Logger.info'
		]
	});
};
