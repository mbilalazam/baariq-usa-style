const features = [
  {
    icon: "🎨",
    title: "Handcrafted Excellence",
    description: "Each Shalwar Qameez is meticulously crafted by skilled artisans using traditional techniques passed down through generations."
  },
  {
    icon: "🧵",
    title: "Premium Fabrics",
    description: "We use only the finest cotton, silk, and blended fabrics sourced directly from Pakistan's renowned textile mills."
  },
  {
    icon: "📏",
    title: "Perfect Tailoring",
    description: "Our garments are tailored to perfection with detailed sizing options to ensure the perfect fit for every body type."
  },
  {
    icon: "🚚",
    title: "Fast USA Shipping",
    description: "Quick and reliable delivery across all 50 states with tracking and customer support throughout your order journey."
  },
  {
    icon: "💎",
    title: "Authentic Designs",
    description: "Traditional Pakistani patterns and embroidery techniques combined with contemporary styling for modern elegance."
  },
  {
    icon: "🎯",
    title: "Custom Orders",
    description: "Special occasion? We offer custom tailoring and design services for weddings, celebrations, and formal events."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
            Why Baariq Stands Apart
          </h2>
          <p className="text-warm-gray text-lg max-w-3xl mx-auto">
            We don&apos;t just sell Shalwar Qameez – we deliver authentic Pakistani heritage, 
            exceptional quality, and unmatched customer service to your doorstep.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-emerald/10"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-display text-xl font-semibold text-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-warm-gray leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-hero rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Experience Authentic Pakistani Fashion
          </h3>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust Baariq for their formal wear needs. 
            From everyday elegance to special occasions, we have you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold">Free Shipping</div>
              <div className="text-sm opacity-90">On orders over $100</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold">30-Day Returns</div>
              <div className="text-sm opacity-90">Hassle-free exchanges</div>
            </div>
            <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-2xl font-bold">Expert Support</div>
              <div className="text-sm opacity-90">Sizing and style guidance</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;