// ADD ITEM TO CART
export const addCart = (product) => {
    return {
        type: "ADDCART",
        payload: product
    }
}
// REMOVE ITEM FROM CART
export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}