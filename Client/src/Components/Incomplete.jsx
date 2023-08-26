import React, { useEffect, useState } from "react";
import Card from "./Card/Card";
import { loadIncomplete } from "../api/loadData";
import LoadingSpinner from "./LoadSpinner/LoadingSpinner";

const Incomplete = () => {
  const [items, setItems] = useState([]);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    loadIncomplete()
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
        setLoading(false);
      });
  }, []);

  console.log(items);
  return (
    <div className="bg-gray-200 p-4 w-[450px]  overflow-y-auto ">
      <div className="flex justify-between ">
        <p>Incomplete</p>
        <p>0</p>
      </div>
      <>
        {items.map((item) =>
          loading ? (
            <LoadingSpinner />
          ) : (
            <Card key={item._id} item={item}></Card>
          )
        )}
      </>
    </div>
  );
};

export default Incomplete;
