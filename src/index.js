import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import Tchat from './containers/Tchat';
import mainReducer from './reducers/mainReducer'

const store = createStore(
    mainReducer,
    compose(
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

render(
    <Provider store={store}>
        <Tchat />
    </Provider>,
    document.getElementById('root')
)
