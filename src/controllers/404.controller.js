import view from '../views/404.view.html';


export const NotFound404 = () => {

    const container = document.createElement('div');
    container.classList.add('flex-col')
    container.classList.add('h-2/4')
    container.innerHTML = view;

    return container

}
