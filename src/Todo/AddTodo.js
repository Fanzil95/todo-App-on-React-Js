import React, {useState} from 'react';
import PropTypes from 'prop-types'


const textForInput = 'New Todo'

function useInputValue (defaultValue=''){
    const [value, setValue] = useState(defaultValue)
    return {
        bind: {
            value,
            onChange: event=>setValue(event.target.value)
        },
       clear: () => setValue(textForInput),
       value: ()=> value,
    }
}

const AddTodo = ({onCreate}) => {
    const input = useInputValue(textForInput)
    const submitHandler = (event) => {
        event.preventDefault ()

        if (input.value().trim()){
            onCreate(input.bind.value)
            input.clear()
            input.initValue()
        }
          
    }
    return (
        <form style={{marginBottom: '1rem'}} onSubmit={submitHandler}>
            <input {...input.bind} 
            onKeyDown={(event)=>{
                if (event.target.value === textForInput){
                    event.target.value = ''
                }
            }}
            onClick={(event)=>{event.target.value=''}} 
            style={input.bind.value===textForInput ? {color: 'grey'} : {color: 'black'} }/>
            <button type='submit'>Add todo</button>
        </form>
    );
}
 AddTodo.propTypes = {
    onCreate: PropTypes.func
 }
export default AddTodo;