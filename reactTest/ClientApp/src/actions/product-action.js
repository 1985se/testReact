import Action from './';

export function setProductList(data) {
    return {
        type: Action.Set_Product_List,
        ProductList: data
    };
}

export function setProductID(data) {
    return {
        type: Action.Set_Product_ID,
        ProductID: data
    };
}