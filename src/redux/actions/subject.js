import { addSubject, removeSubject, setWillUpdated, loadSubjectType } from './types'

export const newSubject = subject => ({
    type: addSubject,
    payload: subject
})

export const dropSubject = id => ({
    type: removeSubject,
    payload: id
})

export const setWillUpdate = data  =>({
    type: setWillUpdated,
    payload: data
})

export const loadSubject = data => ({
    type: loadSubjectType,
    data
})