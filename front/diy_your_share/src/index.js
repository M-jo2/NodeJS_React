import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Client from './Client';
import ClientForm from './ClientForm';

class App extends React.Component{
  state = {
    clients : [
        {id:1 , nom:'Joachim Munoz'},
        {id:2 , nom:'Marcelo Faccioni'},
        {id:3 , nom:'Jean Custom'}
      ]
  }
  
  deleteClient = id =>{
    const copyClients = this.state.clients.slice();
    const index = copyClients.findIndex(client=>client.id === id)
    copyClients.splice(index,1);
    this.setState({clients : copyClients});
    console.log(index)
  }
  
  addClient = newClient =>{
    const copyClients = this.state.clients.slice();
    copyClients.push({id:newClient.id,nom:newClient.nom});
    this.setState({clients : copyClients , newClient : ''});
  }

  render(){
    return(
      <div>
      <h1>Liste clients :</h1>
        {this.state.clients.map(client =>  <Client details={client} OnDelete={this.deleteClient}/>   )   }
        <ClientForm addClient={this.addClient}/>
      </div>
    );
  }
}


ReactDOM.render(
  <App/>, 
  document.getElementById('root')
);


//https://youtu.be/no82oluCZag?t=3330