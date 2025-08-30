import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";

const products = [
  {
    id: 1,
    name: "Classic White Elegance",
    price: "$149",
    originalPrice: "$199",
    image: product1,
    description: "Pure cotton with intricate embroidery",
    badge: "Best Seller",
    occasion: "Formal Events"
  },
  {
    id: 2,
    name: "Emerald Tradition",
    price: "$189",
    originalPrice: "$249",
    image: product2,
    description: "Silk blend with gold thread work",
    badge: "Premium",
    occasion: "Weddings"
  },
  {
    id: 3,
    name: "Royal Maroon",
    price: "$169",
    originalPrice: "$219",
    image: product3,
    description: "Luxurious fabric with traditional motifs",
    badge: "New Arrival",
    occasion: "Celebrations"
  }
];

const FeaturedCollection = () => {
  return (
    <section className="py-20 px-4 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
            Featured Collection
          </h2>
          <p className="text-warm-gray text-lg max-w-2xl mx-auto">
            Handpicked designs that blend traditional Pakistani craftsmanship with contemporary style. 
            Each piece tells a story of heritage and elegance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-gold text-navy font-semibold">
                  {product.badge}
                </Badge>
                <div className="absolute inset-0 bg-navy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button className="bg-white text-navy hover:bg-gold hover:text-white transform scale-90 group-hover:scale-100 transition-all duration-300">
                    Quick View
                  </Button>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-xl font-semibold text-navy">
                    {product.name}
                  </h3>
                  <div className="text-right">
                    <span className="text-emerald font-bold text-lg">{product.price}</span>
                    <span className="text-warm-gray line-through text-sm ml-2">
                      {product.originalPrice}
                    </span>
                  </div>
                </div>
                
                <p className="text-warm-gray mb-2">{product.description}</p>
                <p className="text-emerald text-sm font-medium mb-4">Perfect for {product.occasion}</p>
                
                <div className="flex gap-2">
                  <Button className="flex-1 bg-emerald hover:bg-emerald-light text-white">
                    Add to Cart
                  </Button>
                  <Button variant="outline" className="border-emerald text-emerald hover:bg-emerald hover:text-white">
                    ♡
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            size="lg" 
            className="bg-navy hover:bg-navy-light text-white px-8 py-3 text-lg"
          >
            View All Collection
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;