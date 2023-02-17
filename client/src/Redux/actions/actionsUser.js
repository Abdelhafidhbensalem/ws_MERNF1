import axios from "axios"
import { GET_CURRENT_FAIL, GET_CURRENT_SUCCESS, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, REGISTER_FAIL, REGISTER_SUCCESS } from "../action-type/action_type_User";

export const register = (newUser, navigate) => async (dispatch) => {
    try {
        const res = await axios.post("http://localhost:5000/api/user/register", newUser)
        dispatch({ type: REGISTER_SUCCESS })
        navigate("/login")
        //alert(res.data.msg)
    } catch (error) {
        console.log(error);
        dispatch({ type: REGISTER_FAIL, payload: error })
    }

}


export const login = (loginUser, navigate) => async (dispatch) => {
    try {
        const res = await axios.post("http://localhost:5000/api/user/login", loginUser)
        dispatch({ type: LOGIN_SUCCESS,payload:res.data })
        navigate("/dashboard")
        //alert(res.data.msg)
    } catch (error) {
        console.log(error);
        dispatch({ type: LOGIN_FAIL, payload: error })
    }

}

export const getCurrent = () => async (dispatch) => {
    const token=localStorage.getItem("token");
    try {
        const res = await axios.get("http://localhost:5000/api/user/current",{headers:{Authorization:`Bearer ${token}`}} )
        dispatch({ type: GET_CURRENT_SUCCESS,payload:res.data })
        //alert(res.data.msg)
    } catch (error) {
        console.log(error);
        dispatch({ type: GET_CURRENT_FAIL, payload: error })
    }

}

export const logout=()=>{
return {type: LOGOUT}
}