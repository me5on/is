import sym from './sym.mod.js';


const string = $ => !sym($) && `${$}` === $;
const wrapper = $ => $ instanceof String;
const empty = $ => '' === $;


Object.assign(
    string,
    {
        empty,
        wrapper,
    },
);


export default string;
