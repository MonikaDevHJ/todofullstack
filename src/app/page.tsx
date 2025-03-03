"use client"; // For handling state in App Router

import { useState } from "react";

import Page from "./About/Page"
import Navbar from "./Components/Navbar"

export default function Home() {
  const [todos, setTodos] = useState(["Learn Next.js", "Build a Todo App"]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() === "") return;
    setTodos([...todos, newTodo]);
    setNewTodo("");
  };

  return (
    <main className="flex flex-col items-center p-4">
      <Page/>
      <Navbar/>
      <h1 className="text-2xl font-bold">Todo List</h1>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task..."
        className="border p-2 m-2"
      />
      <button onClick={addTodo} className="bg-blue-500 text-white p-2 rounded">
        Add Todo
      </button>
      <ul className="mt-4">
        {todos.map((todo, index) => (
          <li key={index} className="p-1">{todo}</li>
        ))}
      </ul>
    </main>
  );
}
