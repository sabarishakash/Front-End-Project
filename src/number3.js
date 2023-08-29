import React, { useState } from 'react';
import AddItemForm from './number';
import ItemList from './number2';

function App30() {
  const [items, setItems] = useState([]);

  const handleAddItem = (itemName) => {
    setItems([...items, itemName]);
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Item Management App</h1>
      <AddItemForm onAdd={handleAddItem} />
      <ItemList items={items} onDelete={handleDeleteItem} />
    </div>
  );
}

export  {App30};
