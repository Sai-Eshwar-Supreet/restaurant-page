import "./styles/styles.css";

import homeContent from './pages/home.js'
import menuContent from './pages/menu.js'
import aboutContent from './pages/about.js'


const screenRenderer = (
    function(){

        const factoryDictionary = {
            "Home": homeContent,
            "Menu": menuContent,
            "About": aboutContent
        }

        const content = document.querySelector("#content");

        
        function switchContent(id){
            const factory = factoryDictionary[id];
            if(!content || !factory) return;
            
            const newContent = factory();
            if(!newContent) return;

            content.innerHTML = "";
            content.appendChild(newContent);
        }

        return {switchContent}
    }
)();


// Initializer IIFE
(
    function(){
        const tabButtons = {};

        for(let el of [...document.querySelectorAll(".tab")]){
            tabButtons[el.dataset.link] = el;
        }

        const initialElement = tabButtons["Home"];
        let activeElement;

        function setActiveElement(el){
            if(activeElement) activeElement.classList.remove("active");
            activeElement = el;
            activeElement.classList.add("active");
        }

        document.addEventListener( "click", event => {
            const trigger = event.target.closest("[data-link]");
            if(!trigger) return;

            const id = trigger.dataset.link;
            
            if(!id) return;
            screenRenderer.switchContent(id);
            
            setActiveElement(tabButtons[id]);

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
        
        setActiveElement(initialElement)
        screenRenderer.switchContent(initialElement.dataset.link);
    }
)();