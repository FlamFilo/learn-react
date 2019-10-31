import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { addMessage } from '../actions/messagesAction'
import { MESSAGE_MAX_LENGTH } from '../constants/messageConstant'

class MessageBar extends PureComponent {
    constructor(props) {
        super(props)
        this.state = { content: '' }
    }

    remainingCharactersNumber() {
        return MESSAGE_MAX_LENGTH - this.state.content.length
    }

    remainingCharactersColor() {
        let remainingCharactersNumber = this.remainingCharactersNumber()
        let textColor = 'green'
        if ((MESSAGE_MAX_LENGTH / 4) > remainingCharactersNumber) {
            textColor = 'orange'
        }
        if (0 > remainingCharactersNumber) {
            textColor = 'red'
        }
        return textColor
    }

    sendText() {
        this.props.addMessage(this.state.content, 'Florian', new Date().toISOString())
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
                <input style={{width: '50%'}} onChange={this.textChanged} onKeyDown={this.keyPressed} type='text' value={this.state.content} />
                <button style={{backgroundColor: 'coral', borderColor: 'transparent'}} onClick={this.buttonClicked} type='button'>Send</button>
                <span style={{ color: this.remainingCharactersColor(), marginLeft: '5px' }}>{this.remainingCharactersNumber()}</span>
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