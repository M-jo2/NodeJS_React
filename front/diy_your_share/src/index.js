import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'


class App extends React.Component{
  state = {
    clients : [
        {id:1 , nom:'Joachim Munoz'},
        {id:2 , nom:'Marcelo Faccioni'},
        {id:3 , nom:'Jean Custom'}
      ],
    newClient : ''
  }
  
  deleteClient = id =>{
    const copyClients = this.state.clients.slice();
    const index = copyClients.findIndex(client=>client.id === id)
    copyClients.splice(index,1);
    this.setState({clients : copyClients});
    console.log(index)
  }

  addClient = event =>{
    event.preventDefault();
    const copyClients = this.state.clients.slice();
    const nom = this.state.newClient;
    const id = new Date().getTime();
    copyClients.push({id:id,nom:nom});
    this.setState({clients : copyClients , newClient : ''});
  }

  writeClient = event =>{
    const newClientTemp= event.currentTarget.value;
    this.setState({newClient:newClientTemp})
  }

  render(){
    return(
      <div>
      <h1>Liste clients :</h1>
        {this.state.clients.map(client =>{
          return <h3>{client.nom}  <button onClick={()=>this.deleteClient(client.id)}>X</button> </h3>
        })}

      <form onSubmit={this.addClient}>
        <input value={this.state.newClient} onChange={this.writeClient} type="text" placeholder="entrer le nom d'un client..." ></input>
        <button>Ajouter</button> 
      </form>
      </div>
    );
  }
}

ReactDOM.render(
  <App/>, 
  document.getElementById('root')
);


//https://youtu.be/no82oluCZag?t=3330