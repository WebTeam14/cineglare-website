import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/aboutus" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "#portfolio" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <img
                src={logo}
                alt="Cineglare Logo"
                className="h-10 w-auto md:h-12 object-contain"
              />
            </div>
            {/* Optional text next to logo */}
            {/* <span className="text-xl font-bold text-foreground">CineGlare</span> */}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))} */}

            {navLinks.map((link) =>
              link.path.startsWith("#") ? (
                // ✅ Still use <a> for same-page anchors
                <a
                  key={link.name}
                  href={link.path}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </a>
              ) : (
                // ✅ Use <Link> for React Router navigation
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              )
            )}
            <Button variant="default" size="sm">
              Free Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button variant="default" size="sm" className="w-full">
              Free Quote
            </Button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
