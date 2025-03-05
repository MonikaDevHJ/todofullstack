"use client";

import { useState } from "react";

export default function TodoList() {
  const [newTodo, setNewTodo] = useState("");
  const [todos , setNewTodos] = useState([]);



const handleAddTodo = () =>{
  if(newTodo.trim()===" ")
    return ;
}

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6 text-blue-400">Todo List</h1>

      {/* Input and Button */}
      <div className="flex w-full max-w-md items-center space-x-2">
        <input
          type="text"
          value={newTodo} 
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
          className="flex-1 p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 outline-none border border-gray-700 focus:ring-2 focus:ring-blue-400"
        />
        <button onClick={handleAddTodo}
          className="px-4 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition font-semibold"
        >
          + Add
        </button>
      </div>

      {/* Todo List Container */}
      <ul className="mt-6 w-full max-w-md bg-gray-800 p-4 rounded-lg shadow-lg">
        {[ "Learn Next.js", "Build a Todo App", "Deploy the project"].map((todo, index) => (
          <li
            key={index}
            className="p-3 mb-2 flex justify-between items-center rounded-md bg-gray-700 hover:bg-gray-600 transition"
          >
            {todo}
            <button className="text-red-400 hover:text-red-500 transition">✖</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
