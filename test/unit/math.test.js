var requireHelper = require('../require_helper');

var chai = require('chai');
var expect = require('chai').expect;

var math = requireHelper('lib/math');

// Tests unitaires OperatorsCtrl
describe('# Tests unitaires math.add()', function() {
	it('Est une fonction', function() {
		expect(math.add).to.be.a('function');
	});

	it('1 + 2 = 3', function() {
		expect(math.add(1,2)).to.be.equal(3);
	})
});

describe('# Tests unitaires math.divide()', function() {
	it('Est une fonction', function() {
		expect(math.divide).to.be.a('function');
	});

	it('4 / 2 = 2', function() {
		expect(math.divide(4,2)).to.be.equal(2);
	})
});