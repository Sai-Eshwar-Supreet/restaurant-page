import homeContent from './Pages/home.js'
import menuContent from './Pages/menu.js'
import aboutContent from './Pages/about.js'


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
        });
        
        screenRenderer.switchContent("Menu");
        
        
        
        console.log("Rendered");
    }
)();