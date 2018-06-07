import { TypeLoginAction } from '../actions/LoginAction'

const initialState = {
    stateLogin: {}
};

export default (state = initialState, action) => {
    switch(action.type){
        case TypeLoginAction.LOGIN_ACTION_COMPLETE:
            return {...state, stateLogin: action.data }
            
        case "Logout":
        default:
            return state;
    }
}