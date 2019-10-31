import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import Tchat from './containers/Tchat';
import mainReducer from './reducers/mainReducer'

const loggerMiddleware = store => next => action => {
    console.log(
        `%c%s%c%o`,
        'background: silver; color: navy; padding: 5px; margin-right: 50px;',
        action.type,
        'background: none; color: black',
        action
    )
    next(action)
}

const store = createStore(
    mainReducer,
    compose(
        applyMiddleware(thunk, loggerMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

render(
    <Provider store={store}>
        <Tchat />
    </Provider>,
    document.getElementById('root')
)
