import React, {useState} from 'react';
import AddTodo from '../AddTodo/AddTodo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    {id: 'list1', text: 'Go shopping for cooking', status: 'active'},
    {id: 'list2', text: 'Vacuum the room', status: 'active'},
    {id: 'list3', text: 'Do the laundry', status: 'active'},
  ]);
  const handleAdd = (todo) => setTodos([...todos, todo]);
  const handleUpdate = (updated) => setTodos(todos, map((t) => (t.id === updated.id ? updated : t)));
  const handleDelete = (deleted) => setTodos(todos.filter((t) => t.id !== deleted.id));
  return (
    <section>
      <ul>
        {
          todos.map((item) => (
            <Todo 
              key={item.id} 
              todo={item} 
              onUpdate={handleUpdate} 
              onDelete={handleDelete}
            />
        ))}
      </ul>
      <AddTodo onAdd={handleAdd}/>
    </section>
  );
}
