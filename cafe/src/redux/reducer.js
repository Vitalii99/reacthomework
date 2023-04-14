const initialState = {
    product: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return {
                product: [...state.product, action.payload]
            }
        default:
            return state
            
    }
}

export default reducer;