import { addSubject, removeSubject } from './types'

export const newSubject = subject => ({
    type: addSubject,
    payload: subject
})

export const dropSubject = id => ({
    type: removeSubject,
    payload: id
}) 