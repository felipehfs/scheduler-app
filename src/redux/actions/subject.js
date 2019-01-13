import { addSubjectType, removeSubjectType, updateSubjectType } from './types'

export const newSubject = subject => ({
    type: addSubjectType,
    payload: subject
})

export const dropSubject = id => ({
    type: removeSubjectType,
    payload: id
})

export const updateSubject = subject => ({
    type: updateSubjectType,
    payload: subject
})