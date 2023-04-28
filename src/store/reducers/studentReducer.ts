import {ADD_Student} from '../constants/type'



let intialState = {
    name : "Abdullah",
    age: 24,
    class:"SMIT",

}

export default function studentReducer(state = intialState,action:any) {
    switch (action.type) {
        case ADD_Student:
            let newState= {
                ...state,
                name:"Ali",
                newData: action.payload
            }
            return newState
    
        default:
            return state;
    }
}