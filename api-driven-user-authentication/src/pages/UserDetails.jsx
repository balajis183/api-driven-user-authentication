import React, { useEffect, useState } from "react";
import axios from "axios";
import "../Styles/MyEffect.css";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function UserDetails() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users") // Fetch user data
      .then((response) => {
        console.log("Fetched users:", response.data);
        toast.success("User data fetched successfully!");
        setUsers(response.data); // Store the fetched users in the state
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        toast.warn(
          "Failed to fetch users. Please check your network connection."
        );
      });
  }, []);
  return (
    <div className="user-details-container">
      <h1 id="heading">User Details</h1>
      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ textAlign: "center", marginBottom: "12px" }}>
        <Link to="/login"> Click here to login</Link>
      </div>
      <div>
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </div>
  );
}

export default UserDetails;
