import { createElementRecursively } from "../dom-functions"

const blueprint = {
    type: "div",
    children: []
}

export default createElementRecursively(blueprint);