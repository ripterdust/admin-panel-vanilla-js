import views from '../views/product.view.html';

export const Products = () => {

    const component = document.createElement('div');

    component.innerHTML = views;

    return component
}