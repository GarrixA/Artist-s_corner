import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 px-[5%] mx-auto py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <Link to="/">
            {/* <img src="/path-to-logo.png" alt="Logo" className="h-8" /> */}
            LOGO
          </Link>
        </div>

        {/* Navigation Items */}
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link to="/about" className="text-white hover:text-gray-300">
            About Us
          </Link>
          <Link to="/contact" className="text-white hover:text-gray-300">
            Contact Us
          </Link>
          <Link to="/login" className="text-white hover:text-gray-300">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
