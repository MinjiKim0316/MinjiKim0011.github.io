import React, {useState} from 'react';
import AddTodo from '../AddTodo/AddTodo';

export default function TodoList() {
  const [todos, setTodos] = useState([
    {id: 'list1', text: 'Go shopping for cooking', status: 'active'},
    {id: 'list2', text: 'Vacuum the room', status: 'active'},
    {id: 'list3', text: 'Do the laundry', status: 'active'},
  ]);
  const handleAdd = (todo) => setTodos([...todos, todo]);
  return (
    <section>
      <ul>
        {
          todos.map((item) => (
            <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <AddTodo onAdd={handleAdd}/>
    </section>
  );
}
