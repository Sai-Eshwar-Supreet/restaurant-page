const createElement = function({type, textContent, classList, attributes, dataset} = {}){
    if(typeof(type) !== 'string') throw Error(`Expected type string. Provided: ${type} (${typeof(type)})`);
    const element = document.createElement(type);

    if(typeof(textContent) === 'string') element.textContent = textContent;

    if(Array.isArray(classList) && classList.length > 0){
        for(let c of classList){
            if(!c || typeof(c) !== "string") continue;
            element.classList.add(c);
        }
    }

    if(!!attributes && (typeof(attributes) === "object")){
        console.log(attributes);
        console.log(Object.keys(attributes));
        for(let key of Object.keys(attributes)){
            element[key] = attributes[key];
        }
    }

    if(!!dataset  && (typeof(dataset) === "object")){
        for(let key of Object.keys(dataset)){
            element.dataset[key] = dataset[key];
        }
    }

    return element;
}

function createElementRecursively(node){
    if(!node || (typeof(node) !== 'object')) return;
    const nodeElement = createElement(node);

    if(!nodeElement) return;

    if(!!node.children){
        for(let child of node.children){
            const childElement = createElementRecursively(child);
            if(!!childElement) nodeElement.appendChild(childElement);
        }
    }

    return nodeElement;
}

export {createElement, createElementRecursively};