import React, { useState, useEffect } from "react";

function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{`Name :: ${item.name} Email: ${item.email}`}</li>
        ))}
      </ul>
    </div>
  );
}

export default FetchData;
