import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-emerald/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="font-display text-2xl font-bold text-navy">
            BAARIQ
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-warm-gray hover:text-emerald transition-colors font-medium">
              Home
            </a>
            <a href="#collection" className="text-warm-gray hover:text-emerald transition-colors font-medium">
              Collection
            </a>
            <a href="#about" className="text-warm-gray hover:text-emerald transition-colors font-medium">
              About
            </a>
            <a href="#contact" className="text-warm-gray hover:text-emerald transition-colors font-medium">
              Contact
            </a>
            <Button className="bg-emerald hover:bg-emerald-light text-white">
              Shop Now
            </Button>
          </div>
          
          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="sm"
            className="md:hidden border-emerald text-emerald"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </Button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-emerald/20">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-warm-gray hover:text-emerald transition-colors font-medium">
                Home
              </a>
              <a href="#collection" className="text-warm-gray hover:text-emerald transition-colors font-medium">
                Collection
              </a>
              <a href="#about" className="text-warm-gray hover:text-emerald transition-colors font-medium">
                About
              </a>
              <a href="#contact" className="text-warm-gray hover:text-emerald transition-colors font-medium">
                Contact
              </a>
              <Button className="bg-emerald hover:bg-emerald-light text-white w-full">
                Shop Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;