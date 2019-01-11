import {addSubject, removeSubject } from '../actions/types'

const initial = []

export default function(state= initial, action) {
    switch(action.type){
        case addSubject:
            return [...state, action.payload]
        case removeSubject:
            return state.filter(subject => subject.key !== action.payload)
        default:
            return state 
    }
}