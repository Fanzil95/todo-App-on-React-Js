import React, { useState, useEffect } from 'react';
import TodoList from './Todo/TodoList';
import Contex from './context';
import Loader from './Loader';

const AddTodo = React.lazy(()=> import ('./Todo/AddTodo'))

const App = () => {
   
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(response => response.json())
        .then(todos => {
            setTimeout(()=>{
                setTodos(todos)
                setLoading(false)
            }, 2000)
            
        })
    }, [])


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
                title: titelValue,
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
            <React.Suspense>
            <AddTodo 
            onCreate={addTodo} />
            </React.Suspense>
            {loading && <Loader/>}
            {todos.length !==0 ?<TodoList todos = {todos} onToggle={toggleTodo}/> 
            : <p>{!loading?'No todos' :''}</p>}
        </div>
        </Contex.Provider>
        
    );
}
 
export default App; 