export default {
    type: "section",
    classList: ["final-cta"],
    children: [
        {
            type: 'h2',
            textContent: "Make It a Meal"
        },
        {
            type: 'p',
            textContent: "Walk in or book ahead. We'll take care of the rest."
        },
        {
            type: 'button',
            textContent: "Reserve a Table",
            classList:["cta", "primary"]
        },
        {
            type: 'button',
            textContent: "Explore Menu",
            classList:["cta", "secondary"],
            dataset: {
                link: "Menu"
            }
        },
    ]
};