import React, { useState } from 'react';
import { ShoppingCart, Flower2, ArrowRight, Trash2 } from 'lucide-react';

// Product Card Component
const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-green-600">${product.price}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 flex items-center gap-2"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// Landing Page
const LandingPage = ({ onNavigate }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <Flower2 size={80} className="text-pink-500" />
          </div>
          <h1 className="text-6xl font-bold text-gray-800 mb-4">Blossom Haven</h1>
          <p className="text-2xl text-gray-600">Where Every Bloom Tells a Story</p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-12 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            Welcome to Blossom Haven, your premier destination for exquisite flowers and botanical arrangements. 
            For over a decade, we've been bringing joy and beauty to our community through carefully curated 
            selections of fresh, vibrant blooms.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Our passionate team of florists handpicks each flower, ensuring that every arrangement we create 
            is a masterpiece. Whether you're celebrating a special occasion or simply brightening someone's day, 
            we're here to help you express your emotions through the timeless language of flowers.
          </p>
          <button
            onClick={() => onNavigate('products')}
            className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-3 mx-auto cursor-pointer"
          >
            Explore Our Collection
            <ArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

// Products Page
const ProductsPage = ({ onNavigate, cart, onAddToCart }) => {
  const products = [
    { id: 1, name: "Red Roses Bouquet", price: 45, image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400", description: "Classic dozen red roses, perfect for expressing love and passion" },
    { id: 2, name: "Sunflower Delight", price: 35, image: "https://images.unsplash.com/photo-1597848212624-e530bb0e7d03?w=400", description: "Bright and cheerful sunflowers to brighten any room" },
    { id: 3, name: "Lavender Dreams", price: 30, image: "https://images.unsplash.com/photo-1611518041143-8f1f5e3cfb4f?w=400", description: "Fragrant lavender bouquet for relaxation and serenity" },
    { id: 4, name: "Tulip Garden", price: 40, image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=400", description: "Mixed tulips in vibrant spring colors" },
    { id: 5, name: "White Lilies", price: 50, image: "https://images.unsplash.com/photo-1565011523534-747a8601f10a?w=400", description: "Elegant white lilies symbolizing purity and grace" },
    { id: 6, name: "Orchid Paradise", price: 65, image: "https://images.unsplash.com/photo-1583437176361-5acb2c6b8b15?w=400", description: "Exotic orchids for the sophisticated plant lover" },
    { id: 7, name: "Peony Perfection", price: 55, image: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=400", description: "Lush peonies in soft pink shades" },
    { id: 8, name: "Carnation Mix", price: 28, image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=400", description: "Colorful carnations for lasting beauty" },
    { id: 9, name: "Hydrangea Heaven", price: 48, image: "https://images.unsplash.com/photo-1558879696-eceb8b47e910?w=400", description: "Full blooming hydrangeas in blue and purple" },
    { id: 10, name: "Daisy Chain", price: 25, image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400", description: "Fresh white daisies for simple elegance" },
    { id: 11, name: "Gerbera Joy", price: 32, image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400", description: "Vibrant gerbera daisies in rainbow colors" },
    { id: 12, name: "Iris Elegance", price: 42, image: "https://images.unsplash.com/photo-1599493758267-c6c884c7071f?w=400", description: "Graceful purple iris blooms" },
    { id: 13, name: "Magnolia Magic", price: 58, image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400", description: "Stunning magnolia flowers with sweet fragrance" },
    { id: 14, name: "Calla Lily Charm", price: 52, image: "https://images.unsplash.com/photo-1561181286-d3fee7d55364?w=400", description: "Sophisticated calla lilies in pristine white" },
    { id: 15, name: "Ranunculus Romance", price: 46, image: "https://images.unsplash.com/photo-1597848212624-e530bb0e7d03?w=400", description: "Delicate ranunculus with layered petals" },
    { id: 16, name: "Anemone Artistry", price: 38, image: "https://images.unsplash.com/photo-1611518041143-8f1f5e3cfb4f?w=400", description: "Striking anemones with dark centers" },
    { id: 17, name: "Freesia Fantasy", price: 34, image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?w=400", description: "Fragrant freesias in pastel hues" },
    { id: 18, name: "Protea Power", price: 68, image: "https://images.unsplash.com/photo-1565011523534-747a8601f10a?w=400", description: "Exotic protea flowers for unique arrangements" },
    { id: 19, name: "Sweet Pea Bouquet", price: 29, image: "https://images.unsplash.com/photo-1583437176361-5acb2c6b8b15?w=400", description: "Delicate sweet peas with intoxicating scent" },
    { id: 20, name: "Zinnia Zest", price: 26, image: "https://images.unsplash.com/photo-1591886960571-74d43a9d4166?w=400", description: "Bold zinnias in hot summer colors" },
    { id: 21, name: "Dahlia Delight", price: 54, image: "https://images.unsplash.com/photo-1562690868-60bbe7293e94?w=400", description: "Dramatic dahlias with intricate petals" },
    { id: 22, name: "Cosmos Collection", price: 31, image: "https://images.unsplash.com/photo-1558879696-eceb8b47e910?w=400", description: "Airy cosmos flowers for a wildflower feel" },
    { id: 23, name: "Gardenia Grace", price: 62, image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400", description: "Luxurious gardenias with creamy petals" },
    { id: 24, name: "Snapdragon Surprise", price: 33, image: "https://images.unsplash.com/photo-1563241527-3004b7be0ffd?w=400", description: "Tall snapdragons in mixed colors" },
    { id: 25, name: "Marigold Meadow", price: 24, image: "https://images.unsplash.com/photo-1599493758267-c6c884c7071f?w=400", description: "Cheerful orange and yellow marigolds" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Flower2 size={40} className="text-pink-500" />
            <h1 className="text-2xl font-bold text-gray-800">Blossom Haven</h1>
          </div>
          <button
            onClick={() => onNavigate('cart')}
            className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
          >
            <ShoppingCart size={24} />
            <span className="font-semibold">Cart ({cart.length})</span>
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Flowers Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Cart Page
const CartPage = ({ onNavigate, cart, onRemoveFromCart }) => {
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Flower2 size={40} className="text-pink-500" />
            <h1 className="text-2xl font-bold text-gray-800">Blossom Haven</h1>
          </div>
          <button
            onClick={() => onNavigate('products')}
            className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors duration-200 cursor-pointer"
          >
            Continue Shopping
          </button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h2>
        
        {cart.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <ShoppingCart size={80} className="mx-auto text-gray-300 mb-4" />
            <p className="text-xl text-gray-600 mb-6">Your cart is empty</p>
            <button
              onClick={() => onNavigate('products')}
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg transition-colors duration-200 cursor-pointer"
            >
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-semibold mb-4">Items in Cart ({cart.length})</h3>
                <div className="space-y-4">
                  {cart.map((item, index) => (
                    <div key={index} className="flex items-center justify-between border-b pb-4 last:border-b-0">
                      <div className="flex items-center gap-4">
                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                        <div>
                          <h4 className="font-semibold text-gray-800">{item.name}</h4>
                          <p className="text-gray-600">${item.price}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => onRemoveFromCart(index)}
                        className="text-red-500 hover:text-red-700 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping:</span>
                    <span>$10.00</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between text-xl font-bold text-gray-800">
                    <span>Total:</span>
                    <span>${(totalPrice + 10).toFixed(2)}</span>
                  </div>
                </div>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

// Main App
const App = () => {
  const [currentPage, setCurrentPage] = useState('landing');
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <div>
      {currentPage === 'landing' && <LandingPage onNavigate={setCurrentPage} />}
      {currentPage === 'products' && <ProductsPage onNavigate={setCurrentPage} cart={cart} onAddToCart={handleAddToCart} />}
      {currentPage === 'cart' && <CartPage onNavigate={setCurrentPage} cart={cart} onRemoveFromCart={handleRemoveFromCart} />}
    </div>
  );
};

export default App;