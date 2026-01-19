import { createElementRecursively } from "../dom-functions"


import hero from "./about/hero";
import philosophy from "./about/philosophy";
import process from "./about/process";
import closingStatement from "./about/closing-statement";

const blueprint = {
    type: "div",
    children: [hero, philosophy, process, closingStatement]
}

export default createElementRecursively(blueprint);