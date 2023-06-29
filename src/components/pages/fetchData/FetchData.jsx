
import { useState, useEffect } from "react";

const FetchData = () => {

  const [users, setUsers] = useState([])

  useEffect( ()=> {
    let data = fetch("https://jsonplaceholder.typicode.com/users");

    data
      .then((res) => res.json())
      .then((res) => setUsers(res))
      .catch((error) => console.log(error));
  }, [] )

  console.log(users)


  return <div>FetchData</div>;
};

export default FetchData;
