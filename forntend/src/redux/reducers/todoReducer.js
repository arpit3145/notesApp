import * as actionTypes from "../actions/type"
export const todosReducers =(state = [], action)=>{
    switch (action.type) {
        case actionTypes.ADDNEW_TODO:
            return [action.payload , ...state]
    case actionTypes.GETALL_TODO:
        return action.payload

        case actionTypes.UPDATE_TODO :
            return state.map(todo =>(
                todo._id === action.payload._id ? { ...todo, description: action.payload.description } : todo
            ))

            case actionTypes.DELETE_TODO :
                return state.filter((todo)=> todo._id !== action.payload._id)

                case actionTypes.TOGGLE_TODO  :
                    return state.map((todo)=>(
                        todo._id === action.payload._id ? {...todo , status: !todo.status} : todo
                    ))
        default:
            return state;
    }
}