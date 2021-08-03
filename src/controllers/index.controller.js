import axios from 'axios';
import view from '../views/index.view.html';
import '../styles/index.scss'

const fetchData = async (component) => {
    
    let url = 'http://localhost:3000'
    let { data } = await axios.get(url);

    let { agents, lastSales, sales, products } = data;

    component.querySelector('#products').innerHTML = products;
    component.querySelector('#agents').innerHTML = agents;
    component.querySelector('#sales').innerHTML = sales;


    let table = component.querySelector('#recentSales');

    lastSales.map(({id, agent_id, product_id, product_code}) => {
        table.innerHTML += `
            <tr class="text-center hover:bg-gray-50">
                <td class="p-4">${id}</td>
                <td class="p-4">${agent_id}</td>
                <td class="p-4">${product_id}</td>
                <td class="p-4">${product_code}</td>
            </tr>
        `;
    })

}


export const Index = () => {

    const component = document.createElement('div');
    component.classList.add('p-6');
    component.innerHTML = view;

    fetchData(component);


    return component;
}