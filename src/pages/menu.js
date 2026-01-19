import { createElementRecursively } from "../dom-functions.js"

import hero from "./menu/hero.js";
import categories from "./menu/menu-categories.js";
import starters from "./menu/menu-sections/starters.js";
import mains from "./menu/menu-sections/mains.js";
import sides from "./menu/menu-sections/sides.js";
import desserts from "./menu/menu-sections/desserts.js";
import drinks from "./menu/menu-sections/drinks.js";
import cta from "./menu/final-cta.js";

const blueprint = {
    type: "div",
    children: [hero, categories, starters, mains, sides, desserts, drinks, cta]
}

export default createElementRecursively(blueprint);