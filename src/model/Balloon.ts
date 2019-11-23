import { types } from "/lib/MST";

export const Balloon = types.model({
    wobble: types.number,
    wobbleXFactor: types.number,
    wobbleYFactor: types.number,
    rotationXOffset: types.number,
    rotationYOffset: types.number
});
