const createElement = function({type, textContent = "", classList =[], attributes={}} = {}){
    if(typeof(type) !== 'string') throw Error(`Expected type string. Provided: ${type} (${typeof(type)})`);
    const element = document.createElement(type);

    if(typeof(textContent) === 'string') element.textContent = textContent;

    if(Array.isArray(classList) && classList.length > 0){
        for(let c of classList){
            if(!c || c === null || typeof(c) !== "string") continue;
            element.classList.add(c);
        }
    }

    if(!!attributes && (typeof(attributes) === "object")){

        for(let key in attributes){
            if(Object.hasOwn(attributes, key)){
                element[key] = attributes[key];
            }
        }
    }

    return element;
}

function createElementRecursively(node){
    if(!node || node === null || (typeof(node) !== 'object')) return;
    const nodeElement = createElement(node);

    if(!nodeElement || nodeElement === null) return;

    if(!!node.children){
        for(let child of node.children){
            const childElement = createElementRecursively(child);
            if(!!childElement && childElement !== null) nodeElement.appendChild(childElement);
        }
    }

    return nodeElement;
}

export {createElement, createElementRecursively};