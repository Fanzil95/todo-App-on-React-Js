import React, {useContext} from 'react';
import Proptypes from 'prop-types'
import Contex from '../context';
const styles = {
    li: {
display: 'flex',
justifyContent: 'space-between',
alignItems: 'center',
padding: '.5rem 5 rem',
border: '1px solid #ccc',
borderRadius: '4px',
marginBottom: '.5rem'
    },
    input: {
        marginRight: '1rem'
    }
}

const TodoItem = ({todo, index, onChange}) => {   
    const {onDelete} = useContext(Contex) 
    const classes  = 'done'                                   //&times; - крестик для баттона, стиль
    return (                                          //&nbsp; - space
        <li style={styles.li} >
            <span className={todo.complited?classes:''}>
                <input style={styles.input} 
                type="checkbox" 
                checked={todo.complited}
                onChange={()=>onChange(todo.id)}/>
                <strong>{index+1}</strong>
                &nbsp;
                {todo.titel}
            </span>
            <button 
            className ="rm"
            onClick={()=>(onDelete(todo.id))}>
            &times;</button>     
        </li>
    );
}
 
TodoItem.propTypes = {
    todo: Proptypes.object.isRequired,
    index: Proptypes.number.isRequired,
    onChange: Proptypes.func.isRequired,
    onDelete: Proptypes.func.isRequired
}
export default TodoItem;