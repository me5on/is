/* eslint-disable no-magic-numbers,no-new-wrappers */


import {describe, expect, it} from '@jest/globals';
import boolean from './boolean.fn.js';


describe('boolean', () => {


    it(
        'is a function',
        () => void expect(boolean).toBeFun(),
    );


    it.each([
        true, false,
    ])(
        'returns true for %p',
        $ => expect(boolean).toMap(true, $),
    );

    // noinspection JSPrimitiveTypeWrapperUsage
    it.each([
        null, void (1),
        0, NaN, 1n, '1', '',
        [1], {a: 1}, /./u, [], {},
        new String(), new Number(), new Boolean(),
        Symbol(''), () => void (1),
    ])(
        'returns false for %p',
        $ => expect(boolean).toMap(false, $),
    );


});
