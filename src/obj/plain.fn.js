import p from '../_/primitive.fn.js';
import a from '../arr/array.fn.js';
import bw from '../bul/wrapper.fn.js';
import nil from '../nil/nil.fn.js';
import nw from '../num/wrapper.fn.js';
import re from '../rgx/regex.fn.js';
import sw from '../str/wrapper.fn.js';


const plain = (

    $ => !nil($) && !re($) && !p($) && !a($) && !sw($) && !bw($) && !nw($)

);


export default plain;
