import view from '../views/agents.view.html';

export const Agents = () => {

    const container = document.createElement('div');
    container.innerHTML = view;


    return container;

}