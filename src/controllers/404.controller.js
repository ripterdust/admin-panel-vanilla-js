import view from '../views/404.view.html';


export const NotFound404 = () => {

    const container = document.createElement('div');
    container.innerHTML = view;

    return container

}
