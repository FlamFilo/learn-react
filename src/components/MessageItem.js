import React from 'react'
import { Twemoji } from 'react-emoji-render'

function MessageItem({message}) {
    return (
        <div>
            <small>@{message.username}</small>
            <br/>
            <Twemoji text={message.message}/>
            <br/>
        </div>
    )
}

export default MessageItem