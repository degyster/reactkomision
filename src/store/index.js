import { combineReducers, createStore} from 'redux'
import { reducer } from './reducer'

const rootReducer = combineReducers({
    count: reducer

})
 
export const store = createStore(rootReducer)