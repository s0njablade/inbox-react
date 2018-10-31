import React, { Component } from 'react';
import './App.css';
import Toolbar from './components/Toolbar'
import MessageList from './components/MessageList'

class App extends Component {

constructor(props){
  super(props)
  this.state={
    messages: [],
    // subject: ''
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

  render() {

  // const subjects = (this.state.messages.map(subject => <MessageList messages={this.state.messages} subjects={subject.subject}/>))

    return (
      <div className="App">
        <Toolbar />
        <MessageList messages={this.state.messages}/>
      </div>
    );
  }
}

export default App;
