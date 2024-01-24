import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div>
      <Link to="/LogIn">LogIn</Link>
      <Link to="/SignUp">SignUp</Link>
      <Link to="/">Shop</Link>
      <Link to="/Profile">Profile</Link>
      <Link to="/AboutUs">AboutUs</Link>
    </div>
  );
};
