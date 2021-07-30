import view from '../views/index.view.html';

export const Index = () => {

    const component = document.createElement('div');
    component.innerHTML = view;

    return component;
}