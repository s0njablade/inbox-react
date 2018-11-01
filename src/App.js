import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar'
import MessageList from './components/MessageList'


class App extends Component {

constructor(props){
  super(props)
  this.state={
    messages: [],
    
  }
}

async componentDidMount(){
  let response = await fetch('http://localhost:8082/api/messages')
  let json = await response.json()
  let selected = json.filter(message => message.selected)
  let unRead = json.filter(message => !message.read)

  this.setState({
    messages:json,
  })
}

messageRead = (id) => {
  console.log('messageRead', id)
  const updatedMessages = this.state.messages.map(message =>{
    if(message.id === id){
      message.read = !message.read
    }
    return message
  })

  this.setState({
    messages: updatedMessages
  })
}

  render() {


    return (
      <div className="App">
        <Toolbar />
        <MessageList messages={this.state.messages} messageRead={this.messageRead}/>
      </div>
    );
  }
}

export default App;
