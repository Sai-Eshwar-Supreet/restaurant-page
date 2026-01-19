import { createSection } from "./menu-section-factory";

const sectionData = {
    sectionTitle: "Desserts",
    id: "desserts",
    items:[
        {
            name: "Chocolate Tart",
            price: "₹260",
            description: "Rich chocolate filling with a crisp pastry base."
        },
        {
            name: "Seasonal Fruit",
            price: "₹220",
            description: "Fresh fruit prepared simply."
        },
        {
            name: "Vanilla Custard",
            price:  "₹240",
            description:  "Smooth, light, and not overly sweet."
        },
    ]
};

export default createSection(sectionData);