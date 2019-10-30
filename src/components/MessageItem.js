import React, {Component} from 'react'
import { Twemoji } from 'react-emoji-render'
class MessageItem extends Component {
    render() {
        return (
            <div>
                <Twemoji text={this.props.content}/>
            </div>
        )
    }
}
export default MessageItem