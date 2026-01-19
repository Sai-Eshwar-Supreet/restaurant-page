import { createElementRecursively } from "../dom-functions.js";

import heroSection from "./Home/hero.js";
import valueStripSection from "./Home/value-strip.js"
import highlightsSection from "./Home/highlights.js";
import atmosphereSection from "./Home/atmosphere.js";
import socialProofSection from "./Home/social-proof.js";
import finalCtaSection from "./Home/final-cta.js";


const blueprint = {
    type: "div",
    children: [heroSection, valueStripSection, highlightsSection, atmosphereSection, socialProofSection, finalCtaSection]
}

export default createElementRecursively(blueprint);