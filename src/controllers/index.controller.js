import axios from 'axios';
import view from '../views/index.view.html';


const fetchData = async (component) => {
    
    let url = 'http://localhost:3000'
    let { data } = await axios.get(url);

    let { agents, lastSales, sales, products } = data;

    document.querySelector('#products').innerHTML = products;
    document.querySelector('#agents').innerHTML = agents;
    document.querySelector('#sales').innerHTML = sales;


    let table = document.querySelector('#recentSales');
    lastSales.map(({id, agent_id, product_id, product_code}) => {
        table.innerHTML += `
            <tr>
                <td>${id}</td>
                <td>${agent_id}</td>
                <td>${product_id}</td>
                <td>${product_code}</td>
            </tr>
        `
    })

}


export const Index = () => {

    const component = document.createElement('div');
    component.classList.add('index-screen');
    component.innerHTML = view;

    fetchData(component);


    return component;
}