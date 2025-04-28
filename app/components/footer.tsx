const Footer = () => {
    return (
      <footer id="contact" className="bg-black text-white text-center py-4">
        <p className="mb-2">&copy; {new Date().getFullYear()} GoGetWell. | India</p>
        <div className="flex justify-center space-x-6 mt-2">
          <a href="#features" className="hover:underline">Features</a>
          <a href="#pricing" className="hover:underline">Pricing</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  