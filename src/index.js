import {createStore} from "redux"

const input = document.querySelector('input')
const ul = document.querySelector("ul")

const ADD_TODO = "ADD_TODO"
const DEL_TODO = "DEL_TODO"

const reducer = (state = [], action ) => {
    switch(action.type){
      case ADD_TODO :
        return []
      case DEL_TODO :
        return [];
      default :
        return state
    }
}
const store = createStore(reducer)






