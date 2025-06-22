

import { FAILURE, PENDING, SUCCESS } from "../actions/actionTypes"
const initialState = ({
    loading: false,
    successMsg: [],
    err:""
})
const postReducer=(state=initialState,action)=>{

    if (action.type == PENDING) {
        return {
            ...state,
            loading: true,
            successMsg: [],
            err:null
        }
    }
    if (action.type == SUCCESS) {
        return {
            ...state,
            loading:false,
            successMsg: action.payload,
            // err:null
        }
    }
    if (action.type == FAILURE) {
        return {
            ...state,

            loading: false,
            // success: null,
            err:action.payload
        }
    }
    return state
}
export default postReducer