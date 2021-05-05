import arr from './arr.mod.js';
import nil from './nil.mod.js';
import obj from './obj.mod.js';
import str from './str.mod.js';


const empty = $ => nil($) || str.empty($) || arr.empty($) || obj.empty($);


export default empty;
