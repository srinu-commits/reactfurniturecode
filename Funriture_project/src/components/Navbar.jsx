import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 shadow-md">
      <h1 className="text-2xl font-bold"> Cherukugattu Carpentary Designs for Your Dream Home</h1>

      <div className="flex gap-6">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
          <li>
          <button className="login-btn">
            Login
          </button>
          </li>

      </div>
    </nav>
  );
}

export default Navbar;