import view from '../views/sales.view.html';

export const Sales = () => {
    const container = document.createElement('div');
    container.innerHTML = view;
    
    
    return container
}