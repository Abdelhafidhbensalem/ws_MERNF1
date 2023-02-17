const { REGISTER_FAIL, LOGIN_SUCCESS, GET_CURRENT_SUCCESS, LOGOUT } = require("../action-type/action_type_User");

const InitialSate = {
    errors: null,
    currentUser: {}
}

export const userReducer = (state = InitialSate, { type, payload }) => {
    switch (type) {
        case REGISTER_FAIL:
            return { ...state, errors: payload }
        case LOGIN_SUCCESS:
            localStorage.setItem("token", payload.token)
            return { ...state, currentUser: payload.user }
        case GET_CURRENT_SUCCESS:
            return { ...state, currentUser: payload.user }
        case LOGOUT:
            localStorage.removeItem("token")
            return {
                errors: null,
                currentUser: {}
            }

        default:
            return state
    }

}