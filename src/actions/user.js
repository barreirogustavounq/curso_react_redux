import { user as userTypes } from '../constants/actionsTypes'
import {login as doLogin} from '../mockRequests/usuarios'



export const setLoading = (loading) => async(dispatch) => {
    dispatch({
        type: userTypes.LOADING,
        payload: loading
    })
}

export const login = (userName, passWord) => async(dispatch) => {
    await dispatch(setLoading(true))
    const user = await doLogin(userName, passWord)
    if(user.error){
        await dispatch({
            type: userTypes.ERROR,
            payload: user.error
            
        })
    }else{
        await dispatch({
            type: userTypes.SET_USER,
            payload: user
            
        })
    }
    await dispatch(setLoading(false))
}



// eslint-disable-next-line import/no-anonymous-default-export
export default {
    setLoading,
    login
}