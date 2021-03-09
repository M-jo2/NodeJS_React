import React,{Component} from "react";

class ClientForm extends Component{
    state = {
        newClient:''
    }

    submitClient = event =>{
        event.preventDefault();
        const nom = this.state.newClient;
        const id = new Date().getTime();
        this.props.addClient({id,nom});
        this.setState({newClient:''});
    }
    
    writeClient = event =>{
        const newClientTemp= event.currentTarget.value;
        this.setState({newClient:newClientTemp})
    }

    render(){
        return <form onSubmit={this.submitClient}>
            <input value={this.state.newClient} onChange={this.writeClient} type="text" placeholder="entrer le nom d'un client..." ></input>
            <button>Ajouter</button> 
        </form>
    }
}

export default ClientForm;