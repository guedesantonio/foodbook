import React, { useState, useRef, useEffect } from "react";
import { FruitApi } from '../apis/fruit';

function FruitList() {

  const [fruits, setFruits] = useState([]);  
  const inputRef = useRef();

  const loadFruit = async () => {
    const fruits = await FruitApi.getFruits();
    setFruits(fruits);
  }

  useEffect(() => {
    loadFruit();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const inputElement = inputRef.current;
    const value = inputElement.value;
    inputElement.value = '';
    await FruitApi.addFruit({ name: value, id: Math.random() });
    loadFruit();
  };

  return (
    <div>
      <ul>
        {fruits.map(fruit => {
          return <li key={fruit._id}>{fruit.name}</li>
        })}
      </ul>
      <form onSubmit={onSubmit}>
        <input ref={inputRef} type="text"/>
        <button type="submit">Add Fruit</button>
      </form>
    </div>
  );
}


export default FruitList;
