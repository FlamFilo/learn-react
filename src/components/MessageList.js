import React, {PureComponent} from 'react'
import MessageItem from './MessageItem.js'

class MessageList extends PureComponent {
    render() {
        if ( 1 > this.props.messages.length) {
            return <p>No message(s) yet</p>
        }
        return (
            <ul>
                {this.props.messages.map((message, index) => <li key={index}><MessageItem username={message.username} content={message.content} /></li>)}
            </ul>
        )
    }
}
export default MessageList