import React, {PureComponent} from 'react'
import MessageList from '../components/MessageList.js'
import MessageBar from './MessageBar.js'
import { connect } from 'react-redux'

class Tchat extends PureComponent {
    render() {
        return (
            <section>
                <h2>Tchat</h2>
                <MessageList messages = {this.props.messages}/>
                <MessageBar/>
            </section>
        )
    }
}
const mapStateToProps = (state) => ({ 
    messages: state.messages 
})
export default connect(mapStateToProps)(Tchat)