import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getMessages } from '../actions/messagesAction'
import MessageList from '../components/MessageList'

class MessageListContainer extends PureComponent {

    componentDidMount() {
        this.props.getMessages()
    }

    render () {
        return <MessageList messages={this.props.messages.values} />
    }
}

const mapStateToProps = (state) => ({
    messages: state.messages
})

const mapDispatchToProps = (dispatch) => {
    return ({
        getMessages: bindActionCreators(getMessages, dispatch),
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageListContainer)