import './App.css';
import Header from "./MyComponents/Header";
import Footer from './MyComponents/Footer';
import Todos from './MyComponents/Todos';
import { useState } from 'react';
import AddTodo from './MyComponents/AddTodo';

function App() {
  let initTodo;
  if(localStorage.getItem("todos")){
    initTodo = [];
  }
  else{
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo = (title,desc) =>{
    console.log("I am adding this todo", title, desc);
    let sno;
    if(todos.length == 0){
      sno = 1;
    }
    else{
      sno = todos[todos.length-1].sno+1;
    }
    const myTodo = {
      sno : sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos,myTodo]);
    localStorage.setItem("todos",JSON.stringify(todos));

  }

  const [todos,setTodos] = useState([]);
  
  return(
    <>
      <Header title = "My Todos List" searchBar = {false} />
      <AddTodo addTodo = {addTodo}/>
      <Todos todos = {todos} onDelete = {onDelete} />
      <Footer/>
      
    </>
  );
}

export default App;
