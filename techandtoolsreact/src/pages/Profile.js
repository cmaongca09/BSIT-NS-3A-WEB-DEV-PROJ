// Import necessary modules
import React, { useState } from "react";

// Profile component
export const Profile = () => {
  const initialUserData = {
    firstName: "John",
    middleInitial: "D",
    lastName: "Doe",
    id: "12345",
    accountCreatedAt: "2024-01-24",
    course: "Computer Science",
    year: "3",
    section: "A",
    birthday: "1990-01-01",
    gender: "Male",
  };

  const [user, setUser] = useState(initialUserData);
  const [isEditing, setIsEditing] = useState(false);

  const getFullName = () => {
    return `${user.firstName} ${user.middleInitial} ${user.lastName}`;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleEditProfile = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveProfile = () => {
    setIsEditing(false);
  };

  const checkoutItems = [
    {
      name: "Item 1",
      description: "Description 1",
      price: "$10.00",
      quantity: 2,
    },
    {
      name: "Item 2",
      description: "Description 2",
      price: "$15.00",
      quantity: 1,
    },
    {
      name: "Item 3",
      description: "Description 3",
      price: "$20.00",
      quantity: 3,
    },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Profile</h1>
      <div style={styles.infoContainer}>
        <div>
          <strong>Full Name:</strong>{" "}
          {isEditing ? (
            <>
              <input
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={handleInputChange}
                style={styles.input}
              />
              <input
                type="text"
                name="middleInitial"
                value={user.middleInitial}
                onChange={handleInputChange}
                style={styles.input}
              />
              <input
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={handleInputChange}
                style={styles.input}
              />
            </>
          ) : (
            getFullName()
          )}
        </div>
        <div>
          <strong>ID:</strong> {user.id}
        </div>
        <div>
          <strong>Account Created At:</strong> {user.accountCreatedAt}
        </div>
        <div>
          <strong>Course, Year, Section:</strong>{" "}
          {isEditing ? (
            <>
              <input
                type="text"
                name="course"
                value={user.course}
                onChange={handleInputChange}
                style={styles.input}
              />
              <input
                type="text"
                name="year"
                value={user.year}
                onChange={handleInputChange}
                style={styles.input}
              />
              <input
                type="text"
                name="section"
                value={user.section}
                onChange={handleInputChange}
                style={styles.input}
              />
            </>
          ) : (
            `${user.course}, ${user.year}, ${user.section}`
          )}
        </div>
        <div>
          <strong>Birthday:</strong>{" "}
          {isEditing ? (
            <input
              type="text"
              name="birthday"
              value={user.birthday}
              onChange={handleInputChange}
              style={styles.input}
            />
          ) : (
            user.birthday
          )}
        </div>
        <div>
          <strong>Gender:</strong>{" "}
          {isEditing ? (
            <select
              name="gender"
              value={user.gender}
              onChange={handleInputChange}
              style={styles.input}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          ) : (
            user.gender
          )}
        </div>
        {isEditing && (
          <button onClick={handleSaveProfile} style={styles.button}>
            Save Profile
          </button>
        )}
      </div>
      {!isEditing && (
        <button onClick={handleEditProfile} style={styles.button}>
          Edit Profile
        </button>
      )}

      {/* Checkout Section */}
      <div style={styles.checkoutContainer}>
        <h2>Checkout List</h2>
        <CheckoutList checkoutItems={checkoutItems} />
      </div>
    </div>
  );
};

// CheckoutList component
const CheckoutList = ({ checkoutItems }) => {
  return (
    <div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          {checkoutItems.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        style={styles.button}
        onClick={() => console.log("Checkout button clicked!")}
      >
        Checkout
      </button>
    </div>
  );
};

// Styles

const styles = {
  container: {
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    maxWidth: "400px",
    margin: "auto",
  },
  heading: {
    fontSize: "24px",
    marginBottom: "10px",
  },
  infoContainer: {
    display: "grid",
    rowGap: "10px",
  },
  input: {
    width: "30%",
    padding: "5px",
    borderRadius: "4px",
    border: "1px solid #ccc",
    margin: "5px 5px 5px 0",
  },
  button: {
    padding: "8px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },

  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "10px",
  },
};
