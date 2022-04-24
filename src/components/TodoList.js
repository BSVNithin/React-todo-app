import React,{useState} from 'react'
import Todo from './Todo';
import TodoForm from './TodoForm';

function Todolist() {
    const [todos,setTodo]=useState([]);
    const addTodo=(todo)=>{
        if(!todo.text || /^\*$/.test(todo.text)){
            return;
        }
        const newtodo=[todo,...todos];
        setTodo(newtodo); 
    }
    const updateTodo=(todoId,newValue)=>{
        if(!newValue.text || /^\*$/.test(newValue.text)){
            return;
        }
        setTodo(prev=>prev.map(item=>item.id===todoId?newValue:item));
    }
    const removeTodo=(id)=>{
        const removearr=[...todos].filter((todo)=>todo.id!==id);
        setTodo(removearr);
    }
    const completeTodo=(id)=>{
        let updatedtodos=todos.map((todo)=>{
            if(todo.id===id){
                todo.isComplete=!todo.isComplete;
            }
            return todo;
        })
        setTodo(updatedtodos);
    }
    return (
    <div>
        <h1>Hey what's the plan for today??</h1>
    <TodoForm onSubmit={addTodo}/>
    <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
    </div>
  )
}

export default Todolist