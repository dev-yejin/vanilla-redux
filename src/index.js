import {createStore} from "redux"

const form = document.querySelector('form')
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
store.subscribe(() => console.log(store.getState()))

const paintToDos = () => {
  const toDOs = store.getState();
  ul.innerHTML = "";
  toDOs.forEach(toDo => {
    const li = document.createElement("li")
    li.id = toDo.id
    li.innerText = toDo.text;
    ul.appendChild(li)
  })
}
store.subscribe(paintToDos)

const addToDo = (text) => {
  store.dispatch({type : ADD_TODO, text})
}

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  input.value = "";
  addToDo(toDo);
}


form.addEventListener("submit", onSubmit)


