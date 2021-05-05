const und = $ => void (1) === $;
const nul = $ => null === $;
const nil = $ => null === $ || void (1) === $;


Object.assign(
    nil,
    {
        und,
        undefined: und,
        missing:   und,
        nul,
        null:      nul,
    },
);

export default nil;
