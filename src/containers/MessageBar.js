import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addMessage } from '../actions/messagesAction'

class MessageBar extends PureComponent {

    static MAX_VALUE = 20

    constructor(props) {
        super(props)
        this.state = { content: '' }
    }

    remainingCharactersNumber() {
        return MessageBar.MAX_VALUE - this.state.content.length
    }

    remainingCharactersColor() {
        let remainingCharactersNumber = this.remainingCharactersNumber()
        let textColor = 'green'
        if ((MessageBar.MAX_VALUE / 4) > remainingCharactersNumber) {
            textColor = 'orange'
        }
        if (0 > remainingCharactersNumber) {
            textColor = 'red'
        }
        return textColor
    }

    sendText() {
        this.props.addMessage(this.state.content, 'Florian')
        this.setState({ content: '' })
    }

    //  event handlers
    textChanged = (event) => {
        this.setState({ content: event.target.value })
    }

    buttonClicked = () => {
        this.sendText()
    }

    keyPressed = (event) => {
        if ('Enter' === event.key) {
            this.sendText()
        }
    }

    // Render
    render() {
        return (
            <div>
                <input onChange={this.textChanged} onKeyDown={this.keyPressed} type='text' value={this.state.content} />
                <button onClick={this.buttonClicked} type='button'>Send</button>
                <p style={{ color: this.remainingCharactersColor() }}>{this.remainingCharactersNumber()}</p>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return ({
        addMessage: bindActionCreators(addMessage, dispatch),
    })
}

export default connect(null, mapDispatchToProps)(MessageBar)