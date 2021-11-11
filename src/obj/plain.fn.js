const toP = Object.getPrototypeOf;
const toS = Function.prototype.call.bind(Object.prototype.toString);


const TAG = '[object Object]';


const plain = (

    $ => {

        if ('object' !== typeof $ || null === $) {
            return false;
        }

        if (toP) {
            const p = toP($);
            return null === p || Object.prototype === p;
        }

        return TAG === toS($);
    }

);


export default plain;
