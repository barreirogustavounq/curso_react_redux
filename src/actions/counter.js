import { counter as CounterTypes } from '../constants/actionsTypes'




export const incrementarContador = () => async(dispatch) => {
    dispatch({
        type: CounterTypes.INCREMENTAR
    })
}

export const decrementarContador = () => async(dispatch) => {
    dispatch({
        type: CounterTypes.DECREMENTAR
    })
}



// eslint-disable-next-line import/no-anonymous-default-export
export default {
    incrementarContador,
    decrementarContador
}