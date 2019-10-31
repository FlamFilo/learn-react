import React from 'react'
import MessageItem from './MessageItem'

function MessageList ({messages}) {
    if (1 > messages.length) {
        return <p>No message(s) yet</p>
    }
    return (
        <ul style={{padding: '5px', backgroundColor: 'coral', borderRadius: '15px' }}>
            {messages.map((message, index) => (
                <li key={index} style={{listStyleType: 'none'}}>
                    <MessageItem message={message}/>
                </li>
            ))}
        </ul>
    )
}

export default MessageList