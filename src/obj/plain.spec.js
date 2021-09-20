import {describe, expect, it} from '@jest/globals';
import plain from './plain.fn.js';


describe('plain', () => {


    it(
        'is a function',
        () => void expect(plain).toBeFun(),
    );


    it.each([
        {}, {a: 1}, {[Symbol('')]: 2},
    ])(
        'returns true for %p',
        $ => expect(plain).toMap(true, $),
    );

    it.each([
        /./u, 0, 'string',
    ])(
        'returns false for %p',
        $ => expect(plain).toMap(false, $),
    );


});
