import Action from '../actions';
var initialState = {
    productList: [],
    productID: 0
};

function Product(state = initialState, action) {
    switch (action.type) {
        case Action.Set_Product_List:
            return { ...state, productList: action.productList };
        case Action.Set_Product_ID:
            return { ...state, productID: action.productID };
        default:
            return state;
    }
}
export default Product;