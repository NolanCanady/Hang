const message = (state, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            return {
                id: action.id,
                text: action.text,
                time: action.time,
                author: action.author
            }
        default:
            return state
    }
}
