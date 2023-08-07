import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "../action/action_types"

const initialState=[]
export default(state=initialState,action)=>{
    switch(action.type)
    {
        case ADD_TODO:
            //Add todo
            console.log('adding todo')
            return [...state,action.payload]
        case DELETE_TODO:
            //DELETE TODO
           const new_state =state.filter(todo=>todo.id!==action.payload)
            return new_state
        case UPDATE_TODO:
            //UPDATE TODO
           const update_state= state.map(todo=>{
                if(todo.id===action.payload.todoId){
                    todo.title=action.payload.todo.title
                    todo.discription=action.payload.todo.discription
                }
                return todo
            })
            return update_state
            default:
                return state
    }
}