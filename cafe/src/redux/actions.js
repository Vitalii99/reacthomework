const addProduct = (newProduct) => {
    return {
        type: 'ADD_PRODUCT',
        payload: newProduct,
    }
}

export {addProduct};