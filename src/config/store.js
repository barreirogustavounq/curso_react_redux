import {createStore, combineReducers, applyMiddleware} from 'redux'
import * as reducers from '../reducers'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web




const userPersistConfig = {
    key: 'user',
    storage,
}
const dogPersistConfig = {
    key: 'dog',
    storage
}

const rootReducer = combineReducers({
    ...reducers,
    user: persistReducer(userPersistConfig, reducers.user),
    perrito: persistReducer(dogPersistConfig, reducers.perrito)
})


export const store = createStore(rootReducer, applyMiddleware(thunk))

export const persistor = persistStore(store)