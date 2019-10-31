import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import MessageBar from './MessageBar'
import MessageList from '../components/MessageList'
import { getMessages } from '../actions/messagesAction'

class Tchat extends PureComponent {

    componentDidMount() {
        this.props.getMessages()
    }

    render() {
        return (
            <section>
                <h2 style={{textAlign: 'center'}}>React Tchat</h2>
                <MessageList messages={this.props.messages.values} />
                <MessageBar />
            </section>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(Tchat)