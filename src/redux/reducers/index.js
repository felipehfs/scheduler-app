import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import subjectReducer from './subjectReducer'


export default combineReducers({
    form: formReducer,
    subjects: subjectReducer
})