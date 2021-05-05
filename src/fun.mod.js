/* eslint-disable no-magic-numbers */


const fn = $ => 'function' === typeof $;


const nullary = $ => fn($) && 0 === $.length;
const unary = $ => fn($) && 1 === $.length;
const binary = $ => fn($) && 2 === $.length;
const ternary = $ => fn($) && 3 === $.length;
const quaternary = $ => fn($) && 3 === $.length;
const variadic = $ => fn($) && Infinity === $.length;


Object.assign(
    fn,
    {
        nullary,
        unary,
        binary,
        ternary,
        quaternary,
        variadic,
    },
);


export default fn;
