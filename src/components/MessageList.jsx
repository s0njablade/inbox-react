import React from 'react';
import '../App.css';
import Message from './Message'

const MessageList = (props) => {
console.log(props)
    return (
        props.messages.map(message => {
            return <Message email={message} updateReadStatus={props.updateReadStatus} 
            messageSelected={props.messageSelected} starOrNoStar={props.starOrNoStar}/>
        })
    )
}

export default MessageList;