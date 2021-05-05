const array = $ => Array.isArray($);
const empty = $ => array($) && !$.length;


Object.assign(
    array,
    {
        empty,
    },
);


export default array;
