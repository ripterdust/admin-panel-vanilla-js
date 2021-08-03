import { NotFound404 } from "../controllers/404.controller";
import { Agents } from "../controllers/agent.controller";
import { Index } from "../controllers/index.controller";
import { Products } from "../controllers/products.controller";
import { Sales } from "../controllers/sales.controller";
import { Settings } from "../controllers/settings.controller";

let root = document.querySelector('#root');
let div = document.createElement('div');
export const router = (route) => {
    root.innerHTML = '';
    
    switch(route){

        case '':
            return root.appendChild(Index());

        case '#/':
            return root.appendChild(Index());

        case '#/products':
            return root.appendChild(Products());
        
        case '#/sales':
            return root.appendChild(Sales());
        
        case '#/agents':
            return root.appendChild(Agents());
        case '#/settings':
            return root.appendChild(Settings());
        default:
            return root.appendChild(NotFound404());
    }
}
