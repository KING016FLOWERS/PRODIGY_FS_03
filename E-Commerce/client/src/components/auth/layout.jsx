import { Outlet } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // Import the shopping cart icon

function AuthLayout() {
  return (
    <div className="flex min-h-screen w-full">
      {/* Left side container with gradient background and centered content */}
      <div className="hidden lg:flex items-center justify-center bg-gradient-to-r from-pink-600 to-pink-800 w-1/2 px-12">
        <div className="max-w space-y-6 text-center text-white">
          <FaShoppingCart className="text-6xl mx-auto mb-4 text-white-300" /> {/* Added icon */}
          <h1 className="text-4xl font-extrabold tracking-tight">
            Welcome to ECommerce Shopping
          </h1>
          <p className="text-lg">
            Discover the best deals and an amazing shopping experience!
          </p>
        </div>
      </div>

      {/* Right side container with a lighter background for the main content */}
      <div className="flex flex-1 items-center justify-center bg-yellow-300 px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default AuthLayout;
