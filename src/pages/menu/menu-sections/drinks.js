import { createSection } from "./menu-section-factory";

const sectionData = {
    sectionTitle: "Drinks",
    id: "drinks",
    items:[
        {
            name: "Fresh Lemonade",
            price: "₹120",
            description: "Made in-house daily."
        },
        {
            name: "Iced Tea",
            price: "₹220",
            description: "Lightly sweetened or plain."
        },
        {
            name: "Coffee",
            price:  "₹100",
        },
        {
            name: "Soft Drinks",
            price:  "₹90",
        },
    ]
};

export default createSection(sectionData);