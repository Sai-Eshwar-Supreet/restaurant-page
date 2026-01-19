function createMenuItem({name, price, description}){
    return {
        type: "li",
        classList: ["menu-item"],
        children: [
            {
                type:"div",
                classList: ["menu-item-header"],
                children: [
                    {
                        type: "span",
                        classList: ["item-name"],
                        textContent: name
                    },
                    {
                        type: "span",
                        classList: ["item-price"],
                        textContent: price
                    },
                ]
            },
            {
                type: "p",
                classList: ["item-description"],
                textContent: description
            }
        ]
    }
}


function createSection(sectionData){

    const items = sectionData.items.map( item => createMenuItem(item));
    return {
        type: "section",
        classList: ["menu-section", "section-alt"],
        attributes: {
            id: sectionData.id
        }, 
        children: [
            {
                type: "div",
                classList: ["container"],
                children: [
                    {
                        type: "h2",
                        textContent: sectionData.sectionTitle,
                    },
                    {
                        type: "ul",
                        classList: ["menu-list"],
                        children: items
                    },
                ]
            },
        ]
    };
}

export {createSection};