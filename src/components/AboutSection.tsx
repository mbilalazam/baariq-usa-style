import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-6">
              Our Heritage,
              <span className="text-emerald block">Your Style</span>
            </h2>
            
            <div className="space-y-6 text-warm-gray text-lg leading-relaxed">
              <p>
                Baariq brings you the finest Pakistani men&apos;s Shalwar Qameez, crafted with 
                generations of traditional expertise and designed for the modern gentleman in America.
              </p>
              
              <p>
                Each piece in our collection represents the perfect fusion of authentic Pakistani 
                craftsmanship and contemporary style, ensuring you look distinguished at every 
                formal occasion.
              </p>
              
              <p>
                From intricate hand-embroidery to premium fabrics sourced directly from Pakistan, 
                we maintain the highest standards of quality while delivering authentic cultural elegance.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald">500+</div>
                <div className="text-warm-gray">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald">50+</div>
                <div className="text-warm-gray">Unique Designs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-emerald">5★</div>
                <div className="text-warm-gray">Customer Rating</div>
              </div>
            </div>
            
            <Button 
              size="lg" 
              className="mt-8 bg-gold hover:bg-gold-light text-navy px-8 py-3"
            >
              Learn More About Us
            </Button>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-primary rounded-2xl p-8 text-white">
              <h3 className="font-display text-2xl font-bold mb-6">Why Choose Baariq?</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gold rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Authentic Craftsmanship</h4>
                    <p className="text-sm opacity-90">Traditional techniques passed down through generations</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gold rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Premium Quality</h4>
                    <p className="text-sm opacity-90">Finest fabrics and materials sourced from Pakistan</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gold rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Perfect Fit</h4>
                    <p className="text-sm opacity-90">Tailored sizing options for American customers</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-gold rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-semibold mb-1">Fast Shipping</h4>
                    <p className="text-sm opacity-90">Quick delivery across the United States</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-gold/30 rounded-full"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gold/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;