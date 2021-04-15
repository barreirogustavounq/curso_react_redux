import {user as userActions} from '../constants/actionsTypes'

const INITIAL_STATE = {
    loading: false,
    authUser: null,
    error: null
}



//REDUCER
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case userActions.LOADING:
            return { ...state, loading: action.payload}
        case userActions.ERROR:
            return { ...state, error: action.payload}
        case userActions.SET_USER:
            return {...state, authUser: action.payload }
        default:
            return state;
    }
}