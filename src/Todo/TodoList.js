import React from 'react';
import TodoItem from './TodoItem';
import Proptypes from 'prop-types'
const styles = {
    ul: {
        listStyle: 'none',
        margin: 0,
        padding: 0
    }
}


const TodoList = (props) => {
    console.log(props.todos.map((todo)=>todo))
    return (
        <ul style = {styles.ul}>
            {props.todos.map((todo, index)=>{
                return <TodoItem 
                todo={todo}
                key={todo.id} 
                index={index} 
                onChange={props.onToggle}/>
            })}
        </ul>
    );
}
 
TodoList.propTypes = {
todos: Proptypes.arrayOf(Proptypes.object).isRequired,
onToggle: Proptypes.func.isRequired
}
export default TodoList;

