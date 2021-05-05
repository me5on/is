import nil from './nil.mod.js';


const error = $ => !nil($) && $ instanceof Error;


export default error;
