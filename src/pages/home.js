import { createElementRecursively } from "../dom-functions.js";

import heroSection from "./home/hero.js";
import valueStripSection from "./home/value-strip.js"
import highlightsSection from "./home/highlights.js";
import atmosphereSection from "./home/atmosphere.js";
import socialProofSection from "./home/social-proof.js";
import finalCtaSection from "./home/final-cta.js";


const blueprint = {
    type: "div",
    children: [heroSection, valueStripSection, highlightsSection, atmosphereSection, socialProofSection, finalCtaSection]
}

export default createElementRecursively(blueprint);