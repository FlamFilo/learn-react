import * as actionType from '../constants/actionConstant'

const defaultValues = {
    values: [],
    loading: false,
    error: false,
}

const messages = (state = defaultValues, action) => {
    switch(action.type) {

        case actionType.ADD_MESSAGE :
        case 'SEND_MESSAGE' :
            let addMessageState = Object.assign({}, state)
            addMessageState.values.push({
                message: action.message,
                username: action.username,
                sentAt: action.sentAt,
            })
            return addMessageState
            
        case actionType.LOAD_MESSAGES_PENDING :
            let loadMessagePendingState = Object.assign({}, state)
            loadMessagePendingState.loading = true
            return loadMessagePendingState
            
        case actionType.LOAD_MESSAGES_SUCCESS :
            let loadMessagesSuccessState = Object.assign({}, state)
            loadMessagesSuccessState.loading = false
            loadMessagesSuccessState.values = action.messages
            return loadMessagesSuccessState

        case actionType.LOAD_MESSAGES_ERROR :
            let loadMessageErrorState = Object.asssign({}, state)
            loadMessageErrorState.loading = false
            loadMessageErrorState.error = action.error
            return loadMessageErrorState

        default:
            return state
    }
}

export default messages