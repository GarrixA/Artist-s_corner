import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-center items-center gap-32 mb-10 px-16 text-white bg-black rounded-full border-2 border-white p-5 text-2xl">
      <Link to="/">MVP</Link>
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact Us</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Navbar;
