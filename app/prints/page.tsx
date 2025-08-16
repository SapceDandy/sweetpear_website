export default function PrintsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/khmer-art-collaboration.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-6xl md:text-8xl font-bold mb-6">Prints</h1>
          <p className="font-sans text-xl md:text-2xl font-light">
            Exclusive art collaborations with master Cambodian artisans
          </p>
        </div>
      </div>

      {/* Featured Collaboration */}
      <div className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Collaboration</h2>
            <p className="font-sans text-lg text-gray-600 max-w-3xl mx-auto">
              Our latest partnership with Master Artisan Chenda brings 800-year-old Angkor temple motifs into
              contemporary streetwear
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="/angkor-temple-print.png"
                alt="Angkor Temple Print Collection"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h3 className="font-serif text-3xl font-bold text-gray-900">Angkor Eternal Collection</h3>
              <p className="font-sans text-gray-700 leading-relaxed">
                Hand-drawn interpretations of classical Bayon temple faces and intricate apsara dancer motifs,
                reimagined for modern apparel while preserving their sacred significance.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="font-sans text-sm font-semibold text-gray-900 w-20">Artist:</span>
                  <span className="font-sans text-sm text-gray-600">Master Chenda Sopheak</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-sans text-sm font-semibold text-gray-900 w-20">Medium:</span>
                  <span className="font-sans text-sm text-gray-600">Hand-drawn ink on premium cotton</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-sans text-sm font-semibold text-gray-900 w-20">Edition:</span>
                  <span className="font-sans text-sm text-gray-600">Limited to 100 pieces</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print Gallery */}
      <div className="bg-gray-50 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">Art Gallery</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Print 1 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/khmer-dragon-print.png"
                  alt="Khmer Dragon Print"
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-sans text-lg font-semibold mb-2">Naga Guardian</h3>
                  <p className="font-sans text-sm opacity-90">Traditional serpent protector motif</p>
                </div>
              </div>
            </div>

            {/* Print 2 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/apsara-dancer-print.png"
                  alt="Apsara Dancer Print"
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-sans text-lg font-semibold mb-2">Celestial Dancer</h3>
                  <p className="font-sans text-sm opacity-90">Classical apsara in contemporary form</p>
                </div>
              </div>
            </div>

            {/* Print 3 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/lotus-mandala-print.png"
                  alt="Lotus Mandala Print"
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-sans text-lg font-semibold mb-2">Sacred Lotus</h3>
                  <p className="font-sans text-sm opacity-90">Geometric interpretation of purity</p>
                </div>
              </div>
            </div>

            {/* Print 4 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/bayon-faces-print.png"
                  alt="Bayon Faces Print"
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-sans text-lg font-semibold mb-2">Bayon Serenity</h3>
                  <p className="font-sans text-sm opacity-90">Iconic temple faces reimagined</p>
                </div>
              </div>
            </div>

            {/* Print 5 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/khmer-script-print.png"
                  alt="Khmer Script Print"
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-sans text-lg font-semibold mb-2">Ancient Script</h3>
                  <p className="font-sans text-sm opacity-90">Traditional Khmer calligraphy</p>
                </div>
              </div>
            </div>

            {/* Print 6 */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/garuda-print.png"
                  alt="Garuda Print"
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-sans text-lg font-semibold mb-2">Divine Eagle</h3>
                  <p className="font-sans text-sm opacity-90">Mythical Garuda in flight</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Artist Collaboration CTA */}
      <div className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-8">Collaborate With Us</h2>
          <p className="font-sans text-lg text-gray-600 mb-12 leading-relaxed">
            Are you a traditional artisan or contemporary artist interested in bridging cultures through fashion? We're
            always seeking new collaborations that honor heritage while pushing creative boundaries.
          </p>
          <button className="bg-gray-900 text-white font-sans font-medium px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors duration-200">
            Submit Your Portfolio
          </button>
        </div>
      </div>
    </div>
  )
}
