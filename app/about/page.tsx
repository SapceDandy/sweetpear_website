export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/cambodian-artisan-streetwear.png')",
          }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="font-serif text-6xl md:text-8xl font-bold mb-6">About Sweet Pear</h1>
          <p className="font-sans text-xl md:text-2xl font-light">
            Bridging ancient Cambodian artistry with contemporary streetwear
          </p>
        </div>
      </div>

      {/* Brand Story Section */}
      <div className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-8">Our Story</h2>
              <div className="space-y-6 font-sans text-lg text-gray-700 leading-relaxed">
                <p>
                  Sweet Pear was born from a deep reverence for Cambodia's rich cultural heritage and a vision to bring
                  these timeless artistic traditions into the modern world.
                </p>
                <p>
                  We collaborate with traditional Cambodian artisans, translating ancient motifs from Angkor Wat and
                  classical Khmer patterns into contemporary streetwear that speaks to today's global community.
                </p>
                <p>
                  Every piece tells a story of cultural preservation, artistic innovation, and the beautiful fusion of
                  past and present.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/angkor-wat-streetwear.png"
                alt="Cambodian artisan working"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-50 py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-12">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-amber-500 rounded-full mx-auto flex items-center justify-center">
                <span className="text-white text-2xl font-bold">文</span>
              </div>
              <h3 className="font-sans text-xl font-semibold text-gray-900">Cultural Preservation</h3>
              <p className="font-sans text-gray-600 leading-relaxed">
                Keeping ancient Cambodian artistic traditions alive through contemporary expression
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-red-600 rounded-full mx-auto flex items-center justify-center">
                <span className="text-white text-2xl font-bold">艺</span>
              </div>
              <h3 className="font-sans text-xl font-semibold text-gray-900">Artisan Support</h3>
              <p className="font-sans text-gray-600 leading-relaxed">
                Providing sustainable income and global recognition for traditional craftspeople
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-green-700 rounded-full mx-auto flex items-center justify-center">
                <span className="text-white text-2xl font-bold">新</span>
              </div>
              <h3 className="font-sans text-xl font-semibold text-gray-900">Modern Innovation</h3>
              <p className="font-sans text-gray-600 leading-relaxed">
                Creating fresh, contemporary designs that honor tradition while embracing the future
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">Meet Our Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                <img src="/cambodian-fashion-designer.png" alt="Founder" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-sans text-xl font-semibold text-gray-900 mb-2">Sophea Chen</h3>
              <p className="font-sans text-gray-600 mb-4">Founder & Creative Director</p>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                Born in Phnom Penh, Sophea bridges her Cambodian heritage with global fashion trends
              </p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                <img src="/placeholder-ygnlw.png" alt="Master Artisan" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-sans text-xl font-semibold text-gray-900 mb-2">Master Virak</h3>
              <p className="font-sans text-gray-600 mb-4">Lead Traditional Artisan</p>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                Third-generation craftsman specializing in classical Khmer motifs and techniques
              </p>
            </div>
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
                <img src="/placeholder-ocxp7.png" alt="Design Director" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-sans text-xl font-semibold text-gray-900 mb-2">Maya Rodriguez</h3>
              <p className="font-sans text-gray-600 mb-4">Design Director</p>
              <p className="font-sans text-sm text-gray-500 leading-relaxed">
                International fashion veteran bringing global streetwear expertise to traditional designs
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
