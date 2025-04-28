"use client";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md fixed top-0 w-full z-50">
      <div className="text-2xl font-bold text-blue-600 cursor-pointer">GoGetWell</div>
      <div className="space-x-6 text-gray-700 font-medium hidden md:flex">
        <a href="#features" className="hover:text-blue-600">Features</a>
        <a href="#howitworks" className="hover:text-blue-600">How It Works</a>
        <a href="#testimonials" className="hover:text-blue-600">Testimonials</a>
        <a href="#pricing" className="hover:text-blue-600">Pricing</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
