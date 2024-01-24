import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <Link to="/LogIn">LogIn</Link>
      <Link to="/SignUp">SignUp</Link>
      <Link to="/">Home</Link>
      <Link to="/Shop">Shop</Link>
      <Link to="/Profile">Profile</Link>
    </div>
  );
};
