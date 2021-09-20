import fun from '../fun/fun.fn.js';
import nan from '../num/nan.fn.js';


const invalid = (

    $ => fun($.getTime) && nan($.getTime())

);


export default invalid;
