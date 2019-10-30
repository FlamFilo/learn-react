const messages = (state = [], action) => {
    console.warn(state)
    console.log(action)
    switch(action.type) {
        case 'ADD_MESSAGE' :
            return [
                ...state,
                {
                    content: action.content
                }
            ]
        default:
            return state
    }
}

export default messages