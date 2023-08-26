import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import {  loadTodo } from "../api/loadData";

const Todo = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    loadTodo()
      .then((data) => {
        setItems(data)
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  console.log(items);
  return (
    <div className="bg-gray-200 p-4 w-[450px] overflow-y-auto ">
      <div className="flex justify-between ">
        <p>Todo</p>
        <p>0</p>
      </div>
      <>
        {items.map((item) => (
          <Card key={item._id} item={item}></Card>
        ))}
      </>
    </div>
  );
};

export default Todo;
