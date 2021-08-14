import axios from 'axios';
import view from '../views/agents.view.html';
import '../styles/agents.scss';


var allData = [];

const renderAgents = (data) => {
    let agentsDiv = document.querySelector('#agentsList');
    agentsDiv.innerHTML = `<tr class="bg-white">
    <th class="p-2">
    Id
    </th>
    <th class="p-2">
    First name
    </th>
    <th class="p-2">
    Last name
    </th>
    <th class="p-2">
    Action
    </th>
    </tr>`;


    data.map(({ id, firstname, lastname }) => {
        agentsDiv.innerHTML += `<tr class="text-center hover:bg-gray-50">
        <td class="p-1">${id}</td>
        <td class="p-1">${firstname}</td>
        <td class="p-1">${lastname}</td>
        <td class="p-1">
            <button 
                class="p-1 bg-red-500 rounded-full text-white deleteAgent"      
                agentId="${id}"
            >
                Delete Agent
            </button>
        </td>
        
        </tr>`
    });
    
    const allAgents = agentsDiv.querySelectorAll('.deleteAgent');
    
    for(const agent of allAgents){
        agent.addEventListener('click', ({ target }) => {
            let agentId = target.getAttribute("agentId");
            console.log(agentId)
            renderAgents(data)
        })
    }


}




const getData = async () => {
    
    let url = 'http://localhost:3000/agents';
    
    const { data } = await axios(url);
    var { agents } = data;
    renderAgents(agents)
    allData = [...agents]
};

export const Agents = () => {
    let container = document.createElement('div');
    
    container.innerHTML = view;
    getData()
    
    let searchBar = container.querySelector('#searchBar');
    searchBar.addEventListener('keyup', ({target}) => {
        
        let filteredData = allData.filter(({firstname, lastname }) => {
            
            if(firstname.includes(target.value) || lastname.includes(target.value)){
                return true
            }
            
        })
        
        renderAgents(filteredData)
        
        
    });
    
    // processing form;
    const agentForm = container.querySelector('#agentForm');
    agentForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        let { elements } = e.target;
        let data = {
            firstname : elements[0].value,
            lastname: elements[1].value
        };
        
        if(data.firstname.length <= 0 || data.lastname.length <= 0){
            alert('Insert valid data');
        }else{
            
            let url = 'http://localhost:3000/newAgent';
            axios({
                method: 'post',
                url,
                data
            });
            setTimeout(() => {
                getData();
            }, 2000)
            
        }
        
    });

    
    return container;
    
}