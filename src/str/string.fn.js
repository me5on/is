import literal from './literal.fn.js';
import wrapper from './wrapper.fn.js';


const string = (

    $ => literal($) || wrapper($)

);


export default string;
