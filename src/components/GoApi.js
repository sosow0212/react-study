import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

// API 주소
// https://jsonplaceholder.typicode.com/users

function GoApi() {
  const [Users, setUsers] = useState(null);
  const [Loading, setLoading] = useState(false);
  const [Error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // 요청이 시작 할 때에는 error 와 users 를 초기화하고
        setError(null);
        setUsers(null);
        // loading 상태를 true 로 바꿉니다.
        setLoading(true);

        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };
    fetchUsers();
  }, []);

  if (Loading) return <div>로딩중..</div>;
  if (Error) return <div>에러가 발생했습니다</div>;
  if (!Users) return null;



  return(
    <ul>
      {Users.map(user => (
        <li key={user.id}>
          {user.username} ({user.name})
        </li>
      ))}
    </ul>
  );
}

export default GoApi;
