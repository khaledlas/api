import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import UserList from "./Components/UserList";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]); // where to store the returned data
  const [error, setError] = useState(null); // where to store the coming errors
  useEffect(() => {
    function fetchData() {
      // the function to fetch data from the api
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUsers(res.data))
        .catch((err) => setError(err));
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <UserList users={users} />
    </div>
  );
}

export default App;
