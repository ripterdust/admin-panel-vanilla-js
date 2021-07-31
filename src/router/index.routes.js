import { NotFound404 } from "../controllers/404.controller";
import { Agents } from "../controllers/agent.controller";
import { Index } from "../controllers/index.controller";
import { Products } from "../controllers/products.controller";
import { Sales } from "../controllers/sales.controller";

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
        
        case '#/sales':
            return root.appendChild(Sales());
        
        case '#/agents':
            return root.appendChild(Agents())
        default:
            return root.appendChild(NotFound404());
    }
}
