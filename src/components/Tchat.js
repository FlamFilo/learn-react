import React, { PureComponent } from 'react'

import MessageBar from '../containers/MessageBar'
import MessageListContainer from '../containers/MessageListContainer'

function Tchat() {
    return (
        <section>
            <h2 style={{ textAlign: 'center' }}>React Tchat</h2>
            <MessageListContainer />
            <MessageBar />
        </section>
    )
}

export default Tchat