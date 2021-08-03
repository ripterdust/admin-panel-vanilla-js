import axios from 'axios';
import view from '../views/agents.view.html';
import '../styles/agents.scss';


const getData = async () => {

    let url = 'http://localhost:3000/agents';

    const { data } = await axios(url);

    let { agents } = data
    
    let agentsDiv = document.querySelector('#agentsList');

    agents.map(({ id, firstname, lastname }) => {
        agentsDiv.innerHTML += `<tr class="text-center hover:bg-gray-50">
            <td class="p-1">${id}</td>
            <td class="p-1">${firstname}</td>
            <td class="p-1">${lastname}</td>

        </tr>`
    });
}

export const Agents = () => {

    let container = document.createElement('div');
    container.innerHTML = view;
    getData()
    return container;

}