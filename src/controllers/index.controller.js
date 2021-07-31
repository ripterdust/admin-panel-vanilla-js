import view from '../views/index.view.html';

export const Index = () => {

    const component = document.createElement('div');
    component.classList.add('index-screen');
    component.innerHTML = view;



    return component;
}