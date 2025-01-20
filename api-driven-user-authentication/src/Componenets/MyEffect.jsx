import axios from "axios";
import React, { useEffect, useState } from "react";
import "../Styles/NavStyles.css";
import "../Styles/MyEffect.css";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

function MyEffect() {
  const [users, setUsers] = useState([]);
  const [authenticatedUser, setAuthenticatedUser] = useState(null);
  const [authMessage, setAuthMessage] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false); // New state to track form submission
  // const navigate = useNavigate(); // Initialize useNavigate

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

  function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting and refreshing the page
    setFormSubmitted(true);
    let id = document.getElementById("id").value;
    let email = document.getElementById("email").value;
    let inputObj = {
      userId: id,
      userEmail: email,
    };
    authenticateUser(inputObj, users);
  }

  function authenticateUser(inputObj, users) {
    const { userId, userEmail } = inputObj;
    for (let user of users) {
      // eslint-disable-next-line
      if (userId == user.id && userEmail == user.email) {
        setAuthenticatedUser(user); // Update state with the authenticated user
        setAuthMessage("Authentication successful! User exists."); // Set success message
        // navigate("/products"); // Navigate to products page
        return; // Exit the function once the user is found
      }
    }
    setAuthenticatedUser(null); // Reset if no user is found
    setAuthMessage("Authentication failed! User does not exist."); // Set failure message
  }

  return (
    <div>
      {/* <h1>Fetching Data From API</h1> */}
      <h1 id="h1">User authentication to see the products </h1>
      <div style={{ textAlign: "center", marginBottom: "12px" }}>
        <Link to="/userDetails">
          {" "}
          Click here to see the details of the user{" "}
        </Link>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID</label>
        <input type="text" name="id" id="id" placeholder="Enter id" required />
        <label htmlFor="email">Email</label>
        <input
          type="ema  il"
          name="email"
          id="email"
          placeholder="Enter email"
          required
        />
        <input type="submit" />
      </form>

      {authenticatedUser && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{authenticatedUser.id}</td>
              <td>{authenticatedUser.name}</td>
              <td>{authenticatedUser.username}</td>
              <td>{authenticatedUser.email}</td>
              <td>{authenticatedUser.phone}</td>
              <td>{authenticatedUser.website}</td>
            </tr>
          </tbody>
        </table>
      )}

      {authMessage && <p>{authMessage}</p>}

      {formSubmitted &&
        !authenticatedUser && ( // Check if the form was submitted and user is not authenticated
          <p id="p">Please try again with valid credentials.</p>
        )}

      {authenticatedUser && (
        <p id="p">
          Click <Link to="/products">here</Link> to see the products.
        </p>
      )}
      <div>
        <ToastContainer position="top-center" autoClose={3000} />
      </div>
    </div>
  );
}

export default MyEffect;
