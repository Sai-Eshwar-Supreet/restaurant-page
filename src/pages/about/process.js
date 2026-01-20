import howWeWorkImage from "../../assets/how-we-work.png";

export default {
    type: "section",
    classList:["about-process", "section-alt"],
    children:[
        {
            type: "div",
            classList: ["container"],
            children: [
                {
                    type: 'h2',
                    textContent: "How We Work"
                },
                {
                    type: "div",
                    classList: ["process-content"],
                    children: [
                        {
                            type: 'img',
                            attributes:{
                                src: howWeWorkImage,
                                alt: "Chef plating a dish with fresh ingredients",
                            }
                        },
                        {
                            type: "ul",
                            children:[
                                {
                                    type: "li",
                                    textContent: "Ingredients are sourced fresh and prepared daily"
                                },
                                {
                                    type: "li",
                                    textContent: "Menus change based on season and availability"
                                },
                                {
                                    type: "li",
                                    textContent: "Dishes are kept focused, not overcomplicated"
                                },
                                {
                                    type: "li",
                                    textContent: "Service is attentive without being intrusive"
                                },
                            ]
                        }
                    ]
                },
            ]
        },
    ]
};