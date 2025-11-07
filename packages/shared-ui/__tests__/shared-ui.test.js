'use strict';

const sharedUi = require('..');
const assert = require('assert').strict;

assert.strictEqual(sharedUi(), 'Hello from sharedUi');
console.info('sharedUi tests passed');
