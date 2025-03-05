"use client";

import { useState } from "react";

export default function ShoppingList() {
  const [shoppingList, setShoppingList] = useState(["Apples", "Bananas"]);
  const [newItem, setNewItem] = useState("");

  const addItem = () => {
    if (newItem.trim() === "") return;
    setShoppingList([...shoppingList, newItem]);
    setNewItem("");
  };

  const deleteItem = (index: number) => {
    setShoppingList(shoppingList.filter((_, i) => i !== index));
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-blue-400">Shopping List</h1>

      <div className="flex w-full max-w-md items-center space-x-2">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add a new item..."
          className="flex-1 p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 outline-none border border-gray-700 focus:ring-2 focus:ring-blue-400"
        />
        <button onClick={addItem} className="px-4 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition font-semibold">
          + Add
        </button>
      </div>

      <ul className="mt-6 w-full max-w-md bg-gray-800 p-4 rounded-lg shadow-lg">
        {shoppingList.map((item, index) => (
          <li key={index} className="p-3 mb-2 flex justify-between items-center rounded-md bg-gray-700 hover:bg-gray-600 transition">
            {item}
            <button onClick={() => deleteItem(index)} className="text-red-400 hover:text-red-500 transition">✖</button>
          </li>
        ))}
      </ul>
    </main>
  );
}
