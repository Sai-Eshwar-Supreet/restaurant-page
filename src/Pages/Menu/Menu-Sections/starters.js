import { createSection } from "./menu-section-factory";

const sectionData = {
    sectionTitle: "Starters",
    id: "starters",
    items:[
        {
            name: "Roasted Seasonal Vegetables",
            price: "₹280",
            description: "Finished with herbs and a light house dressing."
        },
        {
            name: "Crispy Flatbread",
            price: "₹250",
            description: "Served warm with a simple tomato spread."
        },
        {
            name: "House Salad",
            price:  "₹220",
            description:  "Mixed greens, seasonal produce, and a light house vinaigrette."
        },
        {
            name: "Soup of the Day",
            price: "₹200",
            description: "Ask your server for today's freshly prepared soup.",
        }
    ]
};

export default createSection(sectionData);