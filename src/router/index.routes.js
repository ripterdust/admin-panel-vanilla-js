import { Index } from "../controllers/index.controller";
import { Products } from "../controllers/products.controller";

let root = document.querySelector('#root');

export const router = (route) => {
    root.innerHTML = '';
    
    switch(route){

        case '':
            return root.appendChild(Index());

        case '#/':
            return root.appendChild(Index());

        case '#/products':
            return root.appendChild(Products());

        default:
            console.log(404);
    }
}
