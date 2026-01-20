# restaurant-page
A modular restaurant website built with __vanilla JavaScript__ and bundled using __Webpack.__
The application renders page content dynamically and switches views without full page reloads.

## Live Demo
[View on GitHub Pages](https://sai-eshwar-supreet.github.io/restaurant-page/)

## Overview
The application contains three main sections
- Home
- Menu
- About
Only a minimal HTML shell is present at load time.
All visible page content is generated and inserted into the DOM using JavaScript.

## Implementation Details
- ### Page Rendering
    - Each page is implemented as a module exporting a factory function
    - Factory functions return a complete DOM subtree for that page
    - A shared container (#content) is cleared and repopulated on navigation
- ### Navigation
    - Page-level navigation is handled using buttons
    - Navigation is triggered via data-link attributes
- ### DOM Construction
    - DOM elements are created using reusable helper functions
    - Page structure is defined using object blueprints
    - Nested sections are assembled recursively from these blueprints

## Technologies Used
- JavaScript
- Webpack
- HTML
- CSS

## Running Locally
``` 
git clone https://github.com/Sai-Eshwar-Supreet/restaurant-page.git
cd restaurant-page
npm install
npx webpack serve
```
Open:
```
http://localhost:8080
```

## Acknowledgements
- This project was completed as part of **[The Odin Project – JavaScript Course](https://www.theodinproject.com/)**