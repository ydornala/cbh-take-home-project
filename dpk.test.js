const { deterministicPartitionKey } = require('./dpk');

describe('deterministicPartitionKey', () => {
	it("Returns the literal '0' when given no input", () => {
		const trivialKey = deterministicPartitionKey();
		expect(trivialKey).toBe('0');
	});

	it('Check hash length to be 128 characters length', () => {
		const trivialKey = deterministicPartitionKey('test');
		expect(trivialKey.length).toBe(128);
	});
});
