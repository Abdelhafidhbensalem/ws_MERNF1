const { LOADINGPRODUCTS, GET_ALLPRODUCTS_SUCCESS, GET_ALLPRODUCTS_FAIL, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAIL, GET_ONEPRODUCTS_SUCCESS, GET_ONEPRODUCTS_FAIL, EDIT_PRODUCT_SUCCESS, DELETE_ONEPRODUCTS_SUCCESS } = require("../action-type/action-type");
const IntialState = {
    products: [],
    errors: null,
    loading: false,
    oneProduct: {}
}
export const productReducer = (state = IntialState, { type, payload }) => {
    switch (type) {
        case LOADINGPRODUCTS:
            return { ...state, loading: true }
        case GET_ALLPRODUCTS_SUCCESS:
            return { ...state, loading: false, products: payload }
        case GET_ALLPRODUCTS_FAIL:
            return { ...state, loading: false, errors: payload }
        case ADD_PRODUCT_SUCCESS:
            return { ...state, products: [...state.products, payload.product] }
        case ADD_PRODUCT_FAIL:
            return { ...state, errors: payload }
        case GET_ONEPRODUCTS_SUCCESS:
            return { ...state, oneProduct: payload }
        case GET_ONEPRODUCTS_FAIL:
            return { ...state, errors: payload }
        case EDIT_PRODUCT_SUCCESS:
            return { ...state, products: state.products.map(el => el._id == payload._id ? payload : el) }

        case DELETE_ONEPRODUCTS_SUCCESS :
            return {...state, products:[]}

        default:
            return state;

    }

}