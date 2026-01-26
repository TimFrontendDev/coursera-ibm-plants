const LandingPage = ({ onNavigate, cart }) => {
  return (
    <div className="min-h-screen">
      <Header onNavigate={onNavigate} cart={cart} currentPage="landing" />
      <div
        className="min-h-screen bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1920&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <Flower2 size={80} className="text-white drop-shadow-lg" />
            </div>
            <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-lg">Blossom Haven</h1>
            <p className="text-2xl text-white drop-shadow-lg">Where Every Bloom Tells a Story</p>
          </div>

          <div className="max-w-3xl mx-auto bg-white bg-opacity-95 rounded-2xl shadow-2xl p-12 mb-12">
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
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 flex items-center gap-3 mx-auto"
            >
              Explore Our Collection
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};