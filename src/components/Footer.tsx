import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      {/* Main Footer Content */}
      <div className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <h3 className="font-display text-3xl font-bold mb-4">BAARIQ</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Bringing you the finest Pakistani men&apos;s Shalwar Qameez with 
                authentic craftsmanship and modern elegance for the American market.
              </p>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
                  📘
                </Button>
                <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
                  📷
                </Button>
                <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
                  🐦
                </Button>
                <Button size="sm" variant="outline" className="border-white text-white hover:bg-white hover:text-navy">
                  💼
                </Button>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-300 hover:text-gold transition-colors">Home</a></li>
                <li><a href="#collection" className="text-gray-300 hover:text-gold transition-colors">Collection</a></li>
                <li><a href="#about" className="text-gray-300 hover:text-gold transition-colors">About Us</a></li>
                <li><a href="#contact" className="text-gray-300 hover:text-gold transition-colors">Contact</a></li>
                <li><a href="#blog" className="text-gray-300 hover:text-gold transition-colors">Style Guide</a></li>
              </ul>
            </div>
            
            {/* Categories */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Categories</h4>
              <ul className="space-y-3">
                <li><a href="#formal" className="text-gray-300 hover:text-gold transition-colors">Formal Wear</a></li>
                <li><a href="#wedding" className="text-gray-300 hover:text-gold transition-colors">Wedding Collection</a></li>
                <li><a href="#casual" className="text-gray-300 hover:text-gold transition-colors">Casual Elegance</a></li>
                <li><a href="#premium" className="text-gray-300 hover:text-gold transition-colors">Premium Line</a></li>
                <li><a href="#accessories" className="text-gray-300 hover:text-gold transition-colors">Accessories</a></li>
              </ul>
            </div>
            
            {/* Newsletter */}
            <div>
              <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
              <p className="text-gray-300 mb-4">
                Subscribe to get updates on new arrivals, exclusive offers, and style tips.
              </p>
              <div className="space-y-3">
                <Input 
                  placeholder="Enter your email"
                  className="bg-navy-light border-emerald text-white placeholder:text-gray-400"
                />
                <Button className="w-full bg-gold hover:bg-gold-light text-navy font-semibold">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Customer Service Section */}
      <div className="border-t border-emerald/20 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center space-x-3">
              <span className="text-gold text-2xl">🚚</span>
              <div>
                <div className="font-semibold">Free Shipping</div>
                <div className="text-gray-300 text-sm">On orders over $100</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <span className="text-gold text-2xl">🔄</span>
              <div>
                <div className="font-semibold">Easy Returns</div>
                <div className="text-gray-300 text-sm">30-day return policy</div>
              </div>
            </div>
            
            <div className="flex items-center justify-center space-x-3">
              <span className="text-gold text-2xl">🎯</span>
              <div>
                <div className="font-semibold">Expert Support</div>
                <div className="text-gray-300 text-sm">Size and style guidance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-emerald/20 py-6 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300 text-sm">
              © 2024 Baariq. All rights reserved. | Authentic Pakistani Men&apos;s Fashion
            </div>
            
            <div className="flex space-x-6 text-sm">
              <a href="#privacy" className="text-gray-300 hover:text-gold transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-300 hover:text-gold transition-colors">
                Terms of Service
              </a>
              <a href="#shipping" className="text-gray-300 hover:text-gold transition-colors">
                Shipping Info
              </a>
              <a href="#size-guide" className="text-gray-300 hover:text-gold transition-colors">
                Size Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;