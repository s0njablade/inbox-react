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
    messages:json
  })
}



readToggle = (e) => {
  // console.log('readToggle')
  const selectedMessages = this.state.messages.filter(message => message.selected === true)
  console.log('selectecMessages', selectedMessages)
  const readOrUnread = e.target.id === 'read' ? true : false
  selectedMessages.forEach(message => this.updateReadStatus(message.id, readOrUnread))
  
}


messageSelected = (e) => {
  
  const id = e.target.id
  const allMessages = this.state.messages
  const updatedMessage = allMessages[id -1]
  updatedMessage.selected = !updatedMessage.selected


  this.setState({
    messages: allMessages
  })
}

updateReadStatus = async (id, readOrUnread) => {
  console.log('updateReadStatus', id, readOrUnread)
  let message = {
    messageIds: [id],
    command: "read",
    "read": readOrUnread

  }

  const result = await fetch('http://localhost:8082/api/messages', {
    method: 'PATCH',
    body: JSON.stringify(message),
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
  })
  const updatedMessages = this.state.messages.map(message =>{
    if(message.id === id){
      message.read = readOrUnread
    }
    return message
  })

  this.setState({
    messages: updatedMessages
  })
}

starOrNoStar = async (e) =>{
const id = e.target.id
let message = {
  messageIds: [id],
  command: "star"
}

const allMessages = this.state.messages

const result = await fetch('http://localhost:8082/api/messages', {
  method: 'PATCH',
  body: JSON.stringify(message),
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  }
})


const updatedMessage = allMessages[id -1]
updatedMessage.starred = !updatedMessage.starred

this.setState({
  messages: allMessages
})
}

  render() {


    return (
      <div className="App">
        <Toolbar readToggle={this.readToggle}/>
        <MessageList starOrNoStar={this.starOrNoStar}messages={this.state.messages} updateReadStatus={this.updateReadStatus} messageSelected={this.messageSelected}/>
      </div>
    )
  }
}

export default App;
