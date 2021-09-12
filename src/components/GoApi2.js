import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function GoApi2() {
  const [User, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(response.data);
      setUser(response.data);
    };
    fetchUser();
  }, []);

  return(
    <div>dsad</div>
  );
}

export default GoApi2;
