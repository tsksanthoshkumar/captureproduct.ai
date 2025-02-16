import React, { useState } from 'react';
import { Phone, Star, DollarSign, Camera, Instagram, ShoppingBag, MessageSquare } from 'lucide-react';

function EditableText({ defaultText, className }: { defaultText: string; className?: string }) {
  const [text, setText] = useState(defaultText);
  return (
    <div
      className={className}
      contentEditable
      onBlur={(e) => setText(e.currentTarget.textContent || defaultText)}
      suppressContentEditableWarning
    >
      {text}
    </div>
  );
}

function EditableImage({ src, alt, className }: { src: string; alt: string; className?: string }) {
  const [imageSrc, setImageSrc] = useState(src);
  
  return (
    <div className="relative group">
      <img src={imageSrc} alt={alt} className={className} />
      <input
        type="text"
        className="hidden group-hover:block absolute bottom-0 left-0 right-0 bg-black/50 text-white p-2 text-sm"
        defaultValue={imageSrc}
        onBlur={(e) => setImageSrc(e.target.value)}
        placeholder="Enter image URL"
      />
    </div>
  );
}

function App() {
  const whatsappNumber = "917013805271";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="min-h-screen bg-[#f5f5f0]">
      {/* Navigation */}
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <EditableText defaultText="AI Model Studio" className="text-2xl font-bold" />
            <div className="flex space-x-8">
              <a href="#pricing" className="flex items-center space-x-1 hover:text-blue-600">
                <DollarSign size={20} />
                <span>Pricing</span>
              </a>
              <a href="#reviews" className="flex items-center space-x-1 hover:text-blue-600">
                <Star size={20} />
                <span>Reviews</span>
              </a>
              <a href="#contact" className="flex items-center space-x-1 hover:text-blue-600">
                <MessageSquare size={20} />
                <span>Contact</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-6">
        <div className="container mx-auto text-center">
          <EditableText 
            defaultText="AI-Powered Model Photography"
            className="text-5xl font-bold mb-6"
          />
          <EditableText 
            defaultText="Create stunning AI-powered human-like models wearing your products. Transform your e-commerce presence!"
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
          />
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-12 px-6 bg-white">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <EditableImage 
            src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800"
            alt="Fashion Model 1"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
          <EditableImage 
            src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800"
            alt="Fashion Model 2"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
          <EditableImage 
            src="https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&w=800"
            alt="Fashion Model 3"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-12 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <ShoppingBag className="w-12 h-12 text-blue-600 mb-4" />
            <EditableText 
              defaultText="Shopify Product Photography"
              className="text-2xl font-bold mb-4"
            />
            <EditableText 
              defaultText="Professional AI-generated model photos optimized for your Shopify store."
              className="text-gray-600"
            />
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Camera className="w-12 h-12 text-blue-600 mb-4" />
            <EditableText 
              defaultText="Amazon Product Images"
              className="text-2xl font-bold mb-4"
            />
            <EditableText 
              defaultText="High-quality product images that meet Amazon's requirements."
              className="text-gray-600"
            />
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <Instagram className="w-12 h-12 text-blue-600 mb-4" />
            <EditableText 
              defaultText="Instagram-Ready Photos"
              className="text-2xl font-bold mb-4"
            />
            <EditableText 
              defaultText="Engaging social media content that drives engagement."
              className="text-gray-600"
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-12 px-6 bg-white">
        <div className="container mx-auto text-center">
          <EditableText 
            defaultText="Simple Pricing"
            className="text-4xl font-bold mb-12"
          />
          <div className="bg-[#f5f5f0] p-8 rounded-lg shadow-lg max-w-md mx-auto">
            <EditableText 
              defaultText="₹2,000"
              className="text-5xl font-bold mb-4"
            />
            <EditableText 
              defaultText="per image"
              className="text-xl text-gray-600 mb-8"
            />
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 rounded-lg inline-flex items-center space-x-2 hover:bg-green-600 transition-colors"
            >
              <Phone size={20} />
              <span>Contact on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-12 px-6">
        <div className="container mx-auto">
          <EditableText 
            defaultText="Customer Reviews"
            className="text-4xl font-bold mb-12 text-center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex text-yellow-400 mb-4">
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
              </div>
              <EditableText 
                defaultText="The AI models look incredibly realistic! This has transformed our product photography."
                className="text-gray-600 mb-4"
              />
              <EditableText 
                defaultText="- Sarah Johnson"
                className="font-bold"
              />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex text-yellow-400 mb-4">
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
              </div>
              <EditableText 
                defaultText="Quick turnaround and excellent quality. Our sales have increased significantly!"
                className="text-gray-600 mb-4"
              />
              <EditableText 
                defaultText="- Mike Chen"
                className="font-bold"
              />
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex text-yellow-400 mb-4">
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
                <Star fill="currentColor" />
              </div>
              <EditableText 
                defaultText="Professional service and amazing results. Highly recommended!"
                className="text-gray-600 mb-4"
              />
              <EditableText 
                defaultText="- Priya Patel"
                className="font-bold"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-12 px-6 bg-white">
        <div className="container mx-auto text-center">
          <EditableText 
            defaultText="Ready to Transform Your Product Photography?"
            className="text-4xl font-bold mb-8"
          />
          <EditableText 
            defaultText="Contact us now to get started with AI-powered model photography"
            className="text-xl text-gray-600 mb-8"
          />
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-8 py-3 rounded-lg inline-flex items-center space-x-2 hover:bg-green-600 transition-colors"
          >
            <Phone size={20} />
            <span>Message on WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;