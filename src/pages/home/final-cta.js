export default {
    type: "section",
    classList: ["final-cta", "section-alt"],
    children: [
        {
            type: "div",
            classList: ["container"],
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
                    type: "div",
                    classList: ["actions"],
                    children: [
                        {
                            type: 'button',
                            textContent: "Explore Menu",
                            classList:["cta", "primary"],
                            dataset: {
                                link: "Menu"
                            }
                        },
                        {
                            type: 'button',
                            textContent: "Reserve a Table",
                            classList:["cta", "secondary"]
                        },
                    ]
                }
            ]
        }
    ] 
};