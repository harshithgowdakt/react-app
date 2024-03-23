import React, { useState, useEffect } from "react";
import "./FetchData.css";

function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Remove the deleted item from the state
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="fetch-data-container">
      <h2>User</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id} className="user-item">
            <span>{`Name :: ${item.name} Email: ${item.email}`}</span>
            <button onClick={() => handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;
