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
                        classList: ["menu-item-name"],
                        textContent: name
                    },
                    {
                        type: "span",
                        classList: ["menu-item-price"],
                        textContent: price
                    },
                ]
            },
            {
                type: "p",
                classList: ["menu-item-description"],
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