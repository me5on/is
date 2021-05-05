import bgi from './bgi.mod.js';


const int = $ => Number.isSafeInteger($);
const flt = $ => Number.isFinite($);
const nan = $ => Number.isNaN($);
const number = $ => Number.isFinite($);
const wrapper = $ => $ instanceof Number;


Object.assign(
    number,
    {
        nan,
        integer: int,
        float:   flt,
        bigint:  bgi,
        int,
        flt,
        bgi,

        wrapper,
    },
);

export default number;
