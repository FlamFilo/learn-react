import * as actionType from '../constants/actionConstant'

export const addMessage = (message, username, sentAt) => ({
  type: actionType.ADD_MESSAGE,
  message,
  username,
  sentAt
})

export const getMessages = () => {
    return (dispatch) => {
        dispatch({type: actionType.LOAD_MESSAGES_PENDING})
        return fetch('https://my-json-server.typicode.com/tlenclos/formation-react-fake-server/messages')
        .then(response => response.json())
        .then(messages => {
            console.log(messages)
            return dispatch({type: actionType.LOAD_MESSAGES_SUCCESS, messages})
        })
        .catch(error => {
            console.warn(error)
            dispatch({type: actionType.LOAD_MESSAGES_ERROR, error})
        })
    }
}