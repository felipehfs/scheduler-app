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
            let i = 0;
            let length = state.list.length;
            for(let i = 0; i < length; i++) {
                if (state.list[i].key === action.payload.key){
                    state.list[i] = action.payload
                    break
                }
            }
            return state
        default:
            return state 
    }
}