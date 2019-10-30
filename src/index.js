import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// import 'bootstrap/dist/css/bootstrap.min.css'; // 
import Tchat from './containers/Tchat';
import indexReducer from './reducers'

const store = createStore(
    indexReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

render(
    <Provider store={store}>
        <Tchat />
    </Provider>,
    document.getElementById('root')
)
