import React, { useState } from 'react';
import TodoList from './Todo/TodoList';
import Contex from './context';
import AddTodo from './Todo/AddTodo';


const App = () => {

    const [todos, setTodos] = useState([])
    
    const toggleTodo = (id) =>{
        setTodos (
            todos.map((todo)=>{
            if(todo.id ===id){
            todo.complited = !todo.complited
            }
            return todo
        })
        )
    }
    function removeTodo (id){
        setTodos (
            todos.filter((todo)=> todo.id!==id)
            )
    }
       
    const addTodo = (titelValue) =>{
        setTodos(
            todos.concat([
               {
                titel: titelValue,
                id: todos.length+1,
                complited: false
               } 
            ])
        )
    }
    return (                                               
        <Contex.Provider value={{onDelete: removeTodo}}>       
        <div className='wraper'>
            <h1>Your Todo List</h1>
            <AddTodo onCreate={addTodo} todos = {todos}/>
            {todos.length !==0 ?<TodoList todos = {todos} onToggle={toggleTodo}/> 
            : <p>No Todos</p>}
        </div>
        </Contex.Provider>
        
    );
}
 
export default App; 