export default {
    type: "section",
    classList: ["section-base"],
    children:[
        {
            type: 'nav',
            classList: ["menu-categories"],
            children: [
                {
                    type:'ul',
                    classList: ["container"],
                    children: [
                        {
                            type: "li",
                            children: [
                                {
                                    type: "a",
                                    textContent: "Starters",
                                    attributes: {
                                        href: "#starters"
                                    }
                                }
                            ]
                        },
                        {
                            type: "li",
                            children: [
                                {
                                    type: "a",
                                    textContent: "Mains",
                                    attributes: {
                                        href: "#mains"
                                    }
                                }
                            ]
                        },
                        {
                            type: "li",
                            children: [
                                {
                                    type: "a",
                                    textContent: "Sides",
                                    attributes: {
                                        href: "#sides"
                                    }
                                }
                            ]
                        },
                        {
                            type: "li",
                            children: [
                                {
                                    type: "a",
                                    textContent: "Desserts",
                                    attributes: {
                                        href: "#desserts"
                                    }
                                }
                            ]
                        },
                        {
                            type: "li",
                            children: [
                                {
                                    type: "a",
                                    textContent: "Drinks",
                                    attributes: {
                                        href: "#drinks"
                                    }
                                }
                            ]
                        },
                    ]
                }
            ]
        }
    ]
};