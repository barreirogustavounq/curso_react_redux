import {perrito as perritoActions} from '../constants/actionsTypes'

const INITIAL_STATE = {
    loading: false,
    list: [],
    selected_perrito: null
}

//REDUCER
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case perritoActions.LOADING:
            return { ...state, loading: action.payload}
        case perritoActions.SET_LIST:
            return {...state, list: action.payload }
        case perritoActions.SET_SELECTED_PERRITO:
            return {...state, selected_perrito: action.payload }
        default:
            return state;
    }
}