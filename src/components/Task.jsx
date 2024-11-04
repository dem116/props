import React from 'react';

function Task({ id, text, completed, deleteTask, toggleCompleteTask }) {
  return (
    <li style={{ textDecoration: completed ? 'line-through' : 'none' }}>
      <span onClick={() => toggleCompleteTask(id)}>{text}</span>
      <button onClick={() => deleteTask(id)}>Eliminar</button>
    </li>
  );
}

export default Task;
