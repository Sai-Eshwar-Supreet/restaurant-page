

export default {
    type: "section",
    classList: ["menu-cta", "section-emphasis"],
    children: [
        {
            type: "div",
            classList: ["container"],
            children: [
                {
                    type: "p",
                    textContent: "See something you like?",
                },
                {
                    type: "div",
                    classList: ["actions"],
                    children: [
                        {
                            type: "button",
                            classList: ["cta", "primary"],
                            textContent: "Reserve a Table",
                        }
                    ]
                }
            ]
        },
    ]
};