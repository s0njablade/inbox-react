import React from 'react';
import '../App.css';

const Message = (props) => {

    console.log('props', props)

    return (
        <div className="Message">
            <div className= {props.email.read ? "row message read" : "row message unread" } >
                <div className="col-xs-1">
                    <div className="row">
                        <div className="col-xs-2">
                            <input type="checkbox" onClick={() => props.messageSelected(props.email.id)} checked={(typeof props.email.selected !== "undefined") && props.email.selected === true ? "checked" : ""}/>
                        </div>
                        <div className="col-xs-2">
                            <i className="star fa fa-star-o"></i>
                        </div>
                    </div>
                </div>
                <div className="col-xs-11" onClick={() => props.updateReadStatus(props.email.id)}>
                    <a href="#">
                        {props.email.subject}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Message;