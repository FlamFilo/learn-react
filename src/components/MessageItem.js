import React from 'react'
import { Twemoji } from 'react-emoji-render'

function MessageItem({ message }) {
    return (
        <div>
            <p style={{ textAlign: 'center', color: 'silver' }}>{message.sentAt}</p>
            <div style={{ backgroundColor: 'silver', marginBottom: '15px', borderRadius: '30px' }}>
                <p style={{  paddingLeft: '25px', margin: '0', color: 'coral' }}>{message.username}</p>
                <Twemoji style={{ paddingLeft: '15px' }} text={message.message} />
            </div>
        </div>
    )
}

export default MessageItem