export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/khmer-hoodie.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-6xl md:text-8xl font-bold mb-6">Buy Shit</h1>
          <p className="font-sans text-xl md:text-2xl font-light">Cultural streetwear that tells your story</p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* T-Shirts */}
            <div className="group cursor-pointer">
              <div className="relative h-96 overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/angkor-tee.png"
                  alt="T-Shirts Collection"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute bottom-6 left-6">
                  <h2 className="font-serif text-3xl font-bold text-white mb-2">T-Shirts</h2>
                  <p className="font-sans text-white/80">From $45</p>
                </div>
              </div>
            </div>

            {/* Hoodies */}
            <div className="group cursor-pointer">
              <div className="relative h-96 overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/khmer-hoodie.png"
                  alt="Hoodies Collection"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute bottom-6 left-6">
                  <h2 className="font-serif text-3xl font-bold text-white mb-2">Hoodies</h2>
                  <p className="font-sans text-white/80">From $85</p>
                </div>
              </div>
            </div>

            {/* Accessories */}
            <div className="group cursor-pointer">
              <div className="relative h-96 overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/cambodian-cap.png"
                  alt="Accessories Collection"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute bottom-6 left-6">
                  <h2 className="font-serif text-3xl font-bold text-white mb-2">Accessories</h2>
                  <p className="font-sans text-white/80">From $28</p>
                </div>
              </div>
            </div>
          </div>

          {/* Featured Products */}
          <div className="mt-24">
            <h2 className="font-serif text-4xl font-bold text-gray-900 text-center mb-16">Featured Items</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Angkor Heritage Tee",
                  price: "$45",
                  image: "/angkor-tee.png",
                },
                {
                  name: "Khmer Pattern Hoodie",
                  price: "$85",
                  image: "/khmer-hoodie.png",
                },
                {
                  name: "Cultural Fusion Cap",
                  price: "$35",
                  image: "/cambodian-cap.png",
                },
                {
                  name: "Temple Guardian Tee",
                  price: "$48",
                  image: "/placeholder-cbik5.png",
                },
              ].map((product, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative overflow-hidden rounded-lg shadow-lg mb-4">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="font-sans text-lg font-medium text-gray-900 mb-1">{product.name}</h3>
                  <p className="font-sans text-xl font-bold text-gray-900">{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
