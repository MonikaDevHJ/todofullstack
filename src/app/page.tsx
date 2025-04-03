  "use client";

  import { useState, useEffect } from "react";

  // Define the type for a shopping item
  interface ShoppingItem {
    id: string;
    name: string;
  }

  export default function ShoppingList() {
    const [newItem, setNewItem] = useState<string>("");
    const [shoppingList, setShoppingList] = useState<ShoppingItem[]>([]);
    const [editingItem, setEditingItem] = useState<string | null>(null);

    // Fetch items from API
    useEffect(() => {
      fetch("/api/users")
        .then((res) => res.json())
        .then((data: ShoppingItem[]) => {
          console.log("Fetched items:", data);
          setShoppingList(data);
        })
        .catch((error) => console.error("Error fetching items:", error));
    }, []);

    // Add item 
    const addItem = async (event: React.FormEvent) => {
      event.preventDefault();
      if (!newItem.trim()) return;

      try {
        const response = await fetch("/api/users", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: newItem }),
        });

        if (!response.ok) {
          throw new Error(`Failed to add item: ${response.statusText}`);
        }

        const addedItem: ShoppingItem = await response.json();
        setShoppingList([...shoppingList, addedItem]);
        setNewItem("");
      } catch (error) {
        console.error("Error adding item:", error);
      }
    };

    // Delete item
    const deleteItem = async (id: string) => {
      try {
        const response = await fetch("/api/users", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },  
          body: JSON.stringify({ id }),
        });

        if (!response.ok) {
          throw new Error(`Failed to delete item: ${response.statusText}`);
        }

        setShoppingList(shoppingList.filter((item) => item.id !== id));
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    };

    // Edit item
    const updateItem = async (id: string, newName: string) => {
      if (!newName.trim()) return;

      try {
        const response = await fetch("/api/users", {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ id, name: newName }),
        });

        if (!response.ok) {
          throw new Error(`Failed to update item: ${response.statusText}`);
        }

        const updatedItem: ShoppingItem = await response.json();
        setShoppingList(
          shoppingList.map((item) => (item.id === id ? updatedItem : item))
        );
        setEditingItem(null);
      } catch (error) {
        console.error("Error updating item:", error);
      }
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
          {shoppingList.map((item) => (
            <li
              key={item.id}
              className="p-3 mb-2 flex justify-between items-center rounded-md bg-gray-700 hover:bg-gray-600 transition"
            >
              {editingItem === item.id ? (
               <input
               type="text"
               defaultValue={item.name}
               onBlur={(e) => updateItem(item.id, (e.target as HTMLInputElement).value)}
               onKeyDown={(e) => {
                 if (e.key === "Enter") {
                   updateItem(item.id, e.currentTarget.value);
                 }
               }}
               autoFocus
               className="bg-gray-600 text-white p-2 rounded w-full"
             />
             
              ) : ( 
                <span>{item.name}</span>
              )}

              <div className="flex gap-2">
                <button onClick={() => setEditingItem(item.id)} className="text-yellow-400 hover:text-yellow-500">
                  ✏️
                </button>
                <button onClick={() => deleteItem(item.id)} className="text-red-400 hover:text-red-500">
                  ✖
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    );
  }
