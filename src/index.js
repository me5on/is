import arr from './arr.mod.js';
import bgi from './bgi.mod.js';
import bul from './bul.mod.js';
import dat from './dat.mod.js';
import empty from './empty.fn.js';
import err from './err.mod.js';
import fun from './fun.mod.js';
import nil from './nil.mod.js';
import num from './number.js';
import obj from './obj.mod.js';
import primitive from './primitive.fn.js';
import prm from './prm.mod.js';
import rgx from './rgx.mod.js';
import str from './str.mod.js';
import sym from './sym.mod.js';


const {int, integer, flt, float, nan} = num;


const is = (

    _ => is // eslint-disable-line no-unused-vars

);


Object.assign(
    is,
    {

        // primitive data types:
        // string, symbol, number, bigint, boolean, undefined, null.
        // primitive wrapper objects:
        // String, Number, BigInt, Boolean, Symbol

        nil,
        bul, boolean: bul, bool: bul,
        nan,
        int, integer,
        flt, float,
        num, number:  num,
        bgi, bigint:  bgi, bint: bgi,
        sym, symbol:  sym,
        str, string:  str,

        // non-primitive objects:
        // Object, Array, Date, Error, Promise, RegExp, Map, Set, WeakMap, WeakSet,

        obj, object:  obj, ob: obj,
        arr, array:   arr, ar: obj,
        dat, date:    dat,
        err, error:   err,
        prm, promise: prm, pr: prm,
        rgx, regex:   rgx, re: rgx, regexp: rgx,

        // callable objects:
        // Function

        fun, function: fun, fn: fun,

        // composite

        empty,
        primitive,
    },
);


export default is;
