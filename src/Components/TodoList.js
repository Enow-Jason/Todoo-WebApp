import React, {useContext, useState} from "react";
import {ThemeContext} from "../Contexts/ThemeContext";
import {TodoListContext} from "../Contexts/TodoListContext";


const TodoList = () => {
    const [todo, setTodo] = useState('')
    const {todos, dispatch } = useContext(TodoListContext);
    const {isDarkTheme, darkTheme, lightTheme, changeTheme} = useContext(ThemeContext);
    const theme = isDarkTheme ? darkTheme : lightTheme;


    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch({type: 'ADD_TODO', text: todo})
        setTodo('');
    }

    const handleRemoveTodo = (e) => {
        const id = e.target.id;
        dispatch({type: 'REMOVE_TODO', id})
    };

    return (
        <div style={{background: theme.background, color: theme.text, textAlign: 'center'}}>
            {todos.length ? (
                todos.map((todo) => {
                    return <p id={todo.id} onClick={handleRemoveTodo} key={todo.id} className='item'>{todo.text}</p>
                })
            ): (
                <div>You have no todos</div>
            )
            }
            <form onSubmit={handleFormSubmit}>
                <label htmlFor='todo' >Add New Task: </label>
                <input type='text' id='todo' value={todo} onChange={(e) => setTodo(e.target.value)} />
                <input  type='submit' value='Add new Todo' className='ui button primary'/>
            </form>
            <button className='ui button primary' onClick={changeTheme}>Change Theme</button>
        </div>
    );
};

export default TodoList;