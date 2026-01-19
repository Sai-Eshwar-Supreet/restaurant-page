import "./styles/styles.css";

import homeContent from './pages/home.js'
import menuContent from './pages/menu.js'
import aboutContent from './pages/about.js'


const screenRenderer = (
    function(){

        const navDictionary = {
            "Home": homeContent,
            "Menu": menuContent,
            "About": aboutContent
        }

        const content = document.querySelector("#content");

        
        function switchContent(id){
            const newContent = navDictionary[id];
            if(!content) return;
            
            content.innerHTML = "";
            content.appendChild(newContent);
        }

        return {switchContent}
    }
)();


// Initializer IIFE
(
    function(){

        document.addEventListener( "click", event => {
            const id = event.target.dataset.link;
            
            if(!id) return;
            screenRenderer.switchContent(id);

            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
        
        screenRenderer.switchContent("Home");
        
        
        
        console.log("Rendered");
    }
)();