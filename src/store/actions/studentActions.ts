import {ADD_Student} from '../constants/type'

export const addStudent = (data:any) => {
    return {
        type: ADD_Student,
        payload: data
    }
}