import placeholderImage from "../../Assets/placeholder-image.png";

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
                        src: placeholderImage,
                        alt: "placeholder for highlight image"
                    }
                },
                {
                    type: "img",
                    attributes: {
                        src: placeholderImage,
                        alt: "placeholder for highlight image"
                    }
                },
                {
                    type: "img",
                    attributes: {
                        src: placeholderImage,
                        alt: "placeholder for highlight image"
                    }
                }
            ]
        },
    ]
};