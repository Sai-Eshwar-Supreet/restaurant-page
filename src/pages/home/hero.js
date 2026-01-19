export default {
    type: "section",
    classList: ['hero', "section-emphasis"],
    children: [
        {
            type: "div",
            classList: ["container"],
            children: [
                {
                    type: 'h1',
                    textContent: "Food Worth Showing Up For",
                },
                {
                    type: 'p',
                    textContent: "Thoughtfully prepared dishes, served fresh every day."
                },
                {
                    type: 'div',
                    classList: ["actions"],
                    children: [
                        {
                            type: "button",
                            textContent: "Explore Menu",
                            classList: ["cta", "primary"],
                            dataset: {
                                link: "Menu"
                            }
                        },
                        {
                            type: "button",
                            textContent: "Reserve a Table",
                            classList: ["cta", "secondary"]
                        }
                    ]
                }
            ]
        }
    ] 
};