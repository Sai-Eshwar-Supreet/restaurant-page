import chickenImage from "../../Assets/chicken.png";
import custardImage from "../../Assets/custard.png";
import grainBowlImage from "../../Assets/grain-bowl.png";

export default {
    type: "section",
    classList: ["highlights"],
    children: [
        {
            type: 'h2',
            textContent: "Today's Favorites",
        },
        {
            type: 'p',
            textContent: "A rotating selection of seasonal dishes our guests keep coming back for.",
        },
        {
            type: 'div',
            classList: ["image-grid"],
            children: [
                {
                    type: "img",
                    attributes: {
                        src: chickenImage,
                        alt: "Grilled herb chicken"
                    }
                },
                {
                    type: "img",
                    attributes: {
                        src: custardImage,
                        alt: "Vanilla custard dessert"
                    }
                },
                {
                    type: "img",
                    attributes: {
                        src: grainBowlImage,
                        alt: "Vegetable grain bowl"
                    }
                }
            ]
        },
        {
            type: "button",
            classList: ["cta", "primary"],
            textContent: "See What's Cooking",
            dataset: {
                link: "Menu"
            }
        }
    ]
};