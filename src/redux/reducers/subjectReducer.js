import {addSubject, removeSubject, setWillUpdated } from '../actions/types'

const initial = {
    list: [],
    willUpdated: null
}

export default function(state= initial, action) {
    switch(action.type){
        case addSubject:
            return {
                ...state,
                list: [...state.list, action.payload]
            }
        case removeSubject:
            return {
                ...state,
                list: state.list.filter(subject => subject.key !== action.payload)
            }
        case setWillUpdated:
            return {
                ...state,
                willUpdated: action.payload
            }
        default:
            return state 
    }
}