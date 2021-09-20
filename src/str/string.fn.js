import sym from '../sym/sym.mod.js';


const string = (

    $ => !sym($) && `${$}` === $

);


export default string;
