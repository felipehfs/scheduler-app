import {addSubjectType, removeSubjectType, updateSubjectType } from '../actions/types'

const initial = {
    list: [],
}

export default function(state= initial, action) {
    switch(action.type){
        case addSubjectType:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case removeSubjectType:
            return {
                ...state,
                list: state.list.filter(subject => subject.key !== action.payload)
            }
        case updateSubjectType:
            state.list = state.list.map(elem => elem.key === action.payload.key? action.payload: elem);
            return state
        default:
            return state 
    }
}