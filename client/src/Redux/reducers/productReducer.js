const { LOADINGPRODUCTS, GET_ALLPRODUCTS_SUCCESS, GET_ALLPRODUCTS_FAIL, ADD_PRODUCT_SUCCESS, ADD_PRODUCT_FAIL } = require("../action-type/action-type");
const IntialState = {
    products: [],
    errors: null,
    loading: false,
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
            ADD_PRODUCT_FAIL:
            return { ...state, errors: payload }
        default:
            return state;
    }

}