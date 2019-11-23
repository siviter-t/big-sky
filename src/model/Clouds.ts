import { types } from "/lib/MST";

export const Clouds = types.model({
    spectrum: types.array(types.number),
    disformRate: types.number,
    lowThreshold: types.number,
    highThreshold: types.number
});
