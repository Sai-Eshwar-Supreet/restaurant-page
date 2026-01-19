import { createElementRecursively } from "../dom-functions"

import hero from "./Menu/hero.js";
import categories from "./Menu/menu-categories.js";
import starters from "./Menu/Menu-Sections/starters.js";
import mains from "./Menu/Menu-Sections/mains.js";
import sides from "./Menu/Menu-Sections/sides.js";
import desserts from "./Menu/Menu-Sections/desserts.js";
import drinks from "./Menu/Menu-Sections/drinks.js";
import cta from "./Menu/final-cta.js";

const blueprint = {
    type: "div",
    children: [hero, categories, starters, mains, sides, desserts, drinks, cta]
}

export default createElementRecursively(blueprint);