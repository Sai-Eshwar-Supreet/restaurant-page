import { createSection } from "./menu-section-factory";

const sectionData = {
    sectionTitle: "Mains",
    id: "mains",
    items:[
        {
            name: "Grilled Herb Chicken",
            price: "₹520",
            description: "Marinated chicken grilled and served with roasted vegetables and pan juices."
        },
        {
            name: "Pan-Seared Fish of the Day",
            price: "₹580",
            description: "Fresh catch prepared simply with lemon, herbs, and a rotating side."
        },
        {
            name: "Vegetable Grain Bowl",
            price:  "₹480",
            description:  "Warm grains, seasonal vegetables, and house dressing."
        },
        {
            name: "Slow-Cooked Beef",
            price: "₹620",
            description: "Tender beef served with reduced sauce and a seasonal accompaniment.",
        }
    ]
};

export default createSection(sectionData);