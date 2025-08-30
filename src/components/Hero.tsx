import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-shalwar-qameez.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Premium Pakistani Shalwar Qameez" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-emerald/80 to-navy/90"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
          BAARIQ
        </h1>
        <p className="text-xl md:text-2xl mb-4 font-light tracking-wide">
          Premium Pakistani Men&apos;s Shalwar Qameez
        </p>
        <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Where traditional craftsmanship meets contemporary elegance. 
          Discover authentic Pakistani formal wear designed for the modern gentleman.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gold hover:bg-gold-light text-navy font-semibold px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105"
          >
            Shop Collection
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="border-white text-white hover:bg-white hover:text-navy px-8 py-6 text-lg transition-all duration-300"
          >
            Our Story
          </Button>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-gold/30 rotate-45 hidden md:block"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 border border-gold/30 rotate-12 hidden md:block"></div>
    </section>
  );
};

export default Hero;