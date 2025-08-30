import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const ContactSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-navy mb-4">
            Get In Touch
          </h2>
          <p className="text-warm-gray text-lg max-w-2xl mx-auto">
            Have questions about sizing, custom orders, or our collection? 
            We&apos;re here to help you find the perfect Shalwar Qameez.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg border-emerald/20">
            <CardContent className="p-8">
              <h3 className="font-display text-2xl font-semibold text-navy mb-6">
                Send us a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-warm-gray font-medium mb-2">
                      First Name *
                    </label>
                    <Input 
                      placeholder="Enter your first name"
                      className="border-emerald/30 focus:border-emerald"
                    />
                  </div>
                  <div>
                    <label className="block text-warm-gray font-medium mb-2">
                      Last Name *
                    </label>
                    <Input 
                      placeholder="Enter your last name"
                      className="border-emerald/30 focus:border-emerald"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-warm-gray font-medium mb-2">
                    Email Address *
                  </label>
                  <Input 
                    type="email"
                    placeholder="your.email@example.com"
                    className="border-emerald/30 focus:border-emerald"
                  />
                </div>
                
                <div>
                  <label className="block text-warm-gray font-medium mb-2">
                    Phone Number
                  </label>
                  <Input 
                    type="tel"
                    placeholder="(555) 123-4567"
                    className="border-emerald/30 focus:border-emerald"
                  />
                </div>
                
                <div>
                  <label className="block text-warm-gray font-medium mb-2">
                    Subject *
                  </label>
                  <Input 
                    placeholder="How can we help you?"
                    className="border-emerald/30 focus:border-emerald"
                  />
                </div>
                
                <div>
                  <label className="block text-warm-gray font-medium mb-2">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Tell us about your requirements, sizing questions, or any other inquiries..."
                    rows={5}
                    className="border-emerald/30 focus:border-emerald resize-none"
                  />
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-emerald hover:bg-emerald-light text-white py-3"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl font-semibold text-navy mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Email Us</h4>
                    <p className="text-warm-gray">info@baariq.store</p>
                    <p className="text-warm-gray">support@baariq.store</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Call Us</h4>
                    <p className="text-warm-gray">+1 (555) 123-BAARIQ</p>
                    <p className="text-sm text-warm-gray">Mon-Fri: 9AM-6PM EST</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🌐</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Website</h4>
                    <p className="text-warm-gray">www.baariq.store</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-xl">🚚</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Shipping</h4>
                    <p className="text-warm-gray">Nationwide USA delivery</p>
                    <p className="text-sm text-warm-gray">Free shipping on orders $100+</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h3 className="font-display text-2xl font-semibold text-navy mb-6">
                Follow Us
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  variant="outline" 
                  className="border-emerald text-emerald hover:bg-emerald hover:text-white p-4 h-auto"
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">📘</div>
                    <div className="font-medium">Facebook</div>
                    <div className="text-sm opacity-70">@baariq</div>
                  </div>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="border-emerald text-emerald hover:bg-emerald hover:text-white p-4 h-auto"
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">📷</div>
                    <div className="font-medium">Instagram</div>
                    <div className="text-sm opacity-70">@baariq</div>
                  </div>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="border-emerald text-emerald hover:bg-emerald hover:text-white p-4 h-auto"
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">🐦</div>
                    <div className="font-medium">Twitter</div>
                    <div className="text-sm opacity-70">@baariq</div>
                  </div>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="border-emerald text-emerald hover:bg-emerald hover:text-white p-4 h-auto"
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">💼</div>
                    <div className="font-medium">LinkedIn</div>
                    <div className="text-sm opacity-70">@baariq</div>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;