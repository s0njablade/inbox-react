import React from 'react';
import '../App.css';

const Message = (props) => {

    console.log('props', props)

    return (
        <div className="Message">
            <div className={ true ? "row message unread" : "row message read"}>
                <div className="col-xs-1">
                    <div className="row">
                        <div className="col-xs-2">
                            <input type="checkbox" />
                        </div>
                        <div className="col-xs-2">
                            <i className="star fa fa-star-o"></i>
                        </div>
                    </div>
                </div>
                <div className="col-xs-11">
                    <a href="#">
                        {props.email.subject}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Message;