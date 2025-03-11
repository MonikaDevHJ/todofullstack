"use client";

import { useState } from "react";

export default function ShoppingList() {
  const [newItem, setNewItem] = useState<string>("");
  const [shoppingList, setShoppingList] = useState<string[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  // Add Item
  const addItem = (event: React.FormEvent) => {
    event.preventDefault();
    if (newItem.trim() === "") return;
    setShoppingList([...shoppingList, newItem]);
    setNewItem("");
  };

  // Delete Item
  const deleteItem = (index: number) => {
    setShoppingList(shoppingList.filter((_, i) => i !== index));
  };

  // Edit Item
  const editItem = (index: number) => {
    setEditingIndex(index); // Set item to edit mode
  };

  // Handle Input Change for Editing
  const handleEditChange = (index: number, value: string) => {
    const updatedList = [...shoppingList];
    updatedList[index] = value;
    setShoppingList(updatedList);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-4xl font-bold mb-6 text-blue-400">🛒 Shopping List</h1>

      {/* Input Form */}
      <form onSubmit={addItem} className="flex w-full max-w-md items-center space-x-2">
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add a new item..."
          className="flex-1 p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 outline-none border border-gray-700 focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="px-4 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition transform hover:scale-105 font-semibold"
        >
          + Add
        </button>
      </form>

      {/* Shopping List */}
      <ul className="mt-6 w-full max-w-md bg-gray-800 p-4 rounded-lg shadow-lg">
        {shoppingList.length === 0 && (
          <p className="text-gray-400 text-center py-4">No items yet. Start adding some! 😊</p>
        )}
        {shoppingList.map((item, index) => (
          <li
            key={index}
            className="p-3 mb-2 flex justify-between items-center rounded-md bg-gray-700 hover:bg-gray-600 transition"
          >
            {/* Edit Mode */}
            {editingIndex === index ? (
              <input
                type="text"
                value={shoppingList[index]}
                onChange={(e) => handleEditChange(index, e.target.value)}
                onBlur={() => setEditingIndex(null)} // Exit edit mode on blur
                onKeyDown={(e) => e.key === "Enter" && setEditingIndex(null)}
                autoFocus
                className="bg-gray-600 text-white p-2 rounded w-full"
              />
            ) : (
              <span>{item}</span>
            )}

            <div className="flex gap-2">
              {/* Edit Button */}
              <button
                onClick={() => editItem(index)}
                className="text-yellow-400 hover:text-yellow-500 transition transform hover:scale-110"
              >
                ✏️
              </button>

              {/* Delete Button */}
              <button
                onClick={() => deleteItem(index)}
                className="text-red-400 hover:text-red-500 transition transform hover:scale-110"
              >
                ✖
              </button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
