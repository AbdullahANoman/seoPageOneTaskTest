import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import { loadCompleted } from "../api/loadData";
import LoadingSpinner from "./LoadSpinner/LoadingSpinner";

const Completed = () => {
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    loadCompleted()
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, []);

  return (
  <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="bg-gray-200 p-4 w-[450px] overflow-y-auto ">
          <div className="flex justify-between ">
            <p>Complete</p>
            <p>0</p>
          </div>
          <>
            {items.map((item) => (
              <Card key={item._id} item={item}></Card>
            ))}
          </>
        </div>
      )}
    </>
  );
};

export default Completed;
