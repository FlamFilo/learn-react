import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import MessageList from '../components/MessageList'
import { webSocket } from '../services/webSocket.js'

class MessageListContainer extends PureComponent {
    
    componentDidMount() {
        // this.props.getMessages()
        webSocket.onmessage = (event) => {
            try {
                const action = JSON.parse(event.data)
                this.props.dispatch(action)
            } catch (error) {
                console.warn(error)
            }
        }
    }

    render () {
        return <MessageList messages={this.props.messages.values} />
    }
}

const mapStateToProps = (state) => ({
    messages: state.messages
})

export default connect(mapStateToProps)(MessageListContainer)