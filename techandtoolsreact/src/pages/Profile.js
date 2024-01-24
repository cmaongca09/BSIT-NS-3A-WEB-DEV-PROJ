import React, { useState, useEffect } from "react";

export const Profile = () => {
  const userId = 123;
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <img
          src={user.profilePictureUrl}
          alt="Profile"
          style={{ width: "100px", height: "100px" }}
        />
      </div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Add more details as needed This is the placeholder */}
    </div>
  );
};
