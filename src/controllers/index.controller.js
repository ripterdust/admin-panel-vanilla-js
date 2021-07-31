import view from '../views/index.view.html';


const getTotalData = (component) => {

    let numbers = component.querySelectorAll('.number');

    numbers.forEach(element => {
        element.innerHTML = 1
    });
}


export const Index = () => {

    const component = document.createElement('div');
    component.classList.add('index-screen');
    component.innerHTML = view;

    getTotalData(component);



    return component;
}