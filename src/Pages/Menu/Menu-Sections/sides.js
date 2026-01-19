import { createSection } from "./menu-section-factory";

const sectionData = {
    sectionTitle: "Sides",
    id: "sides",
    items:[
        {
            name: "Roasted Potatoes",
            price: "₹180",
            description: "Crisp outside, soft inside, lightly seasoned."
        },
        {
            name: "Steamed Seasonal Greens",
            price: "₹160",
            description: "Finished with olive oil and sea salt."
        },
        {
            name: "House Bread",
            price:  "₹140",
            description:  "Served warm with butter."
        },
    ]
};

export default createSection(sectionData);