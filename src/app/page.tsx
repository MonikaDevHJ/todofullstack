"use client";

import { useState } from "react";

export default function ShoppingList() {
  // State for the current shopping list
  const [shoppingList, setShoppingList] = useState(["Apples", "Bananas"]);
  
  // State for the new item to add
  const [newItem, setNewItem] = useState("");

  // Function to handle adding the new item
  const addItem = () => {
    if (newItem.trim() === "") return; // Prevent adding empty items

    // Update the shopping list by adding the new item
    setShoppingList([...shoppingList, newItem]);

    // Clear the input field after adding
    setNewItem("");
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      {/* Title */}
      <h1 className="text-4xl font-bold mb-6 text-blue-400">Shopping List</h1>

      {/* Input and Button */}
      <div className="flex w-full max-w-md items-center space-x-2">
        <input
          type="text"
          value={newItem} // The new item the user types
          onChange={(e) => setNewItem(e.target.value)} // Update newItem state when user types
          placeholder="Add a new item..."
          className="flex-1 p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 outline-none border border-gray-700 focus:ring-2 focus:ring-blue-400"
        />
        <button onClick={addItem} // Call addItem function when the button is clicked
          className="px-4 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition font-semibold"
        >
          + Add
        </button>
      </div>

      {/* Shopping List Container */}
      <ul className="mt-6 w-full max-w-md bg-gray-800 p-4 rounded-lg shadow-lg">
        {shoppingList.map((item, index) => ( // Display each item in shoppingList
          <li
            key={index}
            className="p-3 mb-2 flex justify-between items-center rounded-md bg-gray-700 hover:bg-gray-600 transition"
          >
            {item} {/* Display the item */}
            <button className="text-red-400 hover:text-red-500 transition">✖</button> {/* Delete item button */}
          </li>
        ))}
      </ul>
    </main>
  );
}
