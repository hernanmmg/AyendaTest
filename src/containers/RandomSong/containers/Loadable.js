import loadable from "@loadable/component";

const RandomSong = loadable(() => import("./index"));

export default RandomSong;
