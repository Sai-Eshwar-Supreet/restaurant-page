import { createElementRecursively } from "../dom-functions"

import hero from "./About/hero";
import philosophy from "./About/philosophy";
import process from "./About/process";
import closingStatement from "./About/closing-statement";

const blueprint = {
    type: "div",
    children: [hero, philosophy, process, closingStatement]
}

export default createElementRecursively(blueprint);