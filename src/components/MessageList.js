import React from 'react'
import MessageItem from './MessageItem'

function MessageList ({messages}) {
    if (1 > messages.length) {
        return <p>No message(s) yet</p>
    }
    return (
        <ul>
            {messages.map((message, index) => (
                <li key={index}>
                    <MessageItem message={message}/>
                </li>
            ))}
        </ul>
    )
}

export default MessageList