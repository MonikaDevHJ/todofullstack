"use client";

import { useState } from "react";

export default function ShoppingList() {
  const [newItem, setNewItem] = useState<string>("");

  const [shoppingList, setShoppingList] = useState<string[]>([]);

  // Fix: Add event.preventDefault() to prevent page reload
  const addItem = (event: React.FormEvent) => {
    event.preventDefault(); // Prevents form from refreshing the page

    if (newItem.trim() === "") return; // Prevent empty items
    setShoppingList([...shoppingList, newItem]);
    setNewItem(""); // Clear input field after adding
  };

  const deleteItem = (index: number) => {
    setShoppingList(shoppingList.filter((_, i) => i !== index));
  };

  const editItem = (index: number) =>{
  
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-blue-400">Shopping List</h1>

      {/* Fix: Form handles submission on Enter */}
      <form
        onSubmit={addItem}
        className="flex w-full max-w-md items-center space-x-2"
      >
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add a new item..."
          className="flex-1 p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 outline-none border border-gray-700 focus:ring-2 focus:ring-blue-400"
        />
        {/* Fix: Button must have type="submit" */}
        <button
          type="submit"
          className="px-4 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition font-semibold"
        >
          + Add
        </button>
      </form>

      <ul className="mt-6 w-full max-w-md bg-gray-800 p-4 rounded-lg shadow-lg">
        {shoppingList.map((item, index) => (
          <li
            key={index}
            className="p-3 mb-2 flex justify-between items-center rounded-md bg-gray-700 hover:bg-gray-600 transition"
          >
            {item}

            <button
              onClick={() => editItem(index)}
              className="text-yellow-400 hover:text-yellow-500 transition mr-2"
            >
              ✏️ Edit
            </button>
            
            
            <button
              onClick={() => deleteItem(index)}
              className="text-red-400 hover:text-red-500 transition"
            >
              ✖
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}
