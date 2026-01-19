export default {
    type: "div",
    classList: ['home-hero'],
    children: [
        {
            type: 'h2',
            textContent: "Food Worth Showing Up For",
        },
        {
            type: 'p',
            textContent: "Thoughtfully prepared dishes, served fresh every day."
        },
        {
            type: 'div',
            classList: ["hero-actions"],
            children: [
                {
                    type: "button",
                    textContent: "Explore Menu",
                    classList: ["cta", "primary"]
                },
                {
                    type: "button",
                    textContent: "Reserve a Table",
                    classList: ["cta", "secondary"]
                }
            ]
        }
    ] 
};