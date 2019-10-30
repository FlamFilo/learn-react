import * as actionType from '../constants/actionConstant'

export const addMessage = (message, username) => ({
  type: actionType.ADD_MESSAGE,
  message,
  username
})

export const getMessages = () => {
    return (dispatch) => {
        dispatch({type: actionType.LOAD_MESSAGES_PENDING})
        return fetch('https://my-json-server.typicode.com/tlenclos/formation-react-fake-server/messages')
        .then(response => response.json())
        .then(messages => dispatch({type: actionType.LOAD_MESSAGES_SUCCESS, messages}))
        .catch(error => {
            console.warn(error)
            dispatch({type: actionType.LOAD_MESSAGES_ERROR, error})
        })
    }
}