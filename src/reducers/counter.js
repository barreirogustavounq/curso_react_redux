import {counter as counterActions} from '../constants/actionsTypes'

const INITIAL_STATE = {
    count:0
}



//REDUCER
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case counterActions.INCREMENTAR:
            return { ...state, count: state.count + 1}
        case counterActions.DECREMENTAR:
            return {...state, count: state.count - 1}
        default:
            return state;
    }
}