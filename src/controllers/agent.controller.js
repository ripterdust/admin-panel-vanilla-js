import axios from 'axios';
import view from '../views/agents.view.html';

const getData = async (component) => {

    let url = 'http://localhost:3000/agents';

    const { data } = await axios(url);

    console.log(data)


}

export const Agents = () => {

    let container = document.createElement('div');
    container.innerHTML = view;
    return container;

}