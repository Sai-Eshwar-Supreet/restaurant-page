export default {
    type: "section",
    classList: ["social-proof"],
    children: [
        {
            type: "h2",
            textContent: "Loved by Locals"
        },
        {
            type: "blockquote",
            children: [
                {
                    type: "p",
                    textContent: "Great food, consistently done right."
                },
                {
                    type: "cite",
                    textContent: "Customer A"
                },
            ]
        },
        {
            type: "blockquote",
            children: [
                {
                    type: "p",
                    textContent: "Easy to recommend, easier to return."
                },
                {
                    type: "cite",
                    textContent: "Customer B"
                },
            ]
        }
    ]
};