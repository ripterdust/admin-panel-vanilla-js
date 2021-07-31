import axios from 'axios';
import view from '../views/index.view.html';


const fetchData = async (component) => {
    
    let url = 'http://localhost:3000'
    let { data } = await axios.get(url);

    let { agents, lastSales, sales, products } = data;

    document.querySelector('#products').innerHTML = products;
    document.querySelector('#agents').innerHTML = agents;
    document.querySelector('#sales').innerHTML = sales;

}


export const Index = () => {

    const component = document.createElement('div');
    component.classList.add('index-screen');
    component.innerHTML = view;

    fetchData(component);


    return component;
}