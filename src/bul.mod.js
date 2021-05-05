const boolean = $ => true === $ || false === $;
const wrapper = $ => $ instanceof Boolean;


Object.assign(
    boolean,
    {
        wrapper,
    },
);

export default boolean;
