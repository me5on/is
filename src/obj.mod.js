import array from './arr.mod.js';
import boolean from './bul.mod.js';
import nil from './nil.mod.js';
import number from './number.js';
import primitive from './primitive.fn.js';
import string from './str.mod.js';


const object = $ => !nil($) && !primitive($);
const plain = $ => !nil($) && !primitive($) && !array($) && !string.wrapper($) && !boolean.wrapper($) && !number.wrapper($);

const empty = $ => object($) && !Object.keys($).length;
const keyed = $ => object($) && !!Object.getOwnPropertyNames($).length;
const symboled = $ => object($) && !!Object.getOwnPropertySymbols($).length;
const propped = $ => keyed($) || symboled($);


Object.assign(
    object,
    {
        plain,
        empty,
        keyed,
        propped,
        symboled,
    },
);

export default object;
