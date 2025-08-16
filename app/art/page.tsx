export default function ArtPage() {
  return (
    <div className="min-h-screen bg-purple-600">
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-great-vibes text-6xl text-white text-center mb-12">Handmade Art</h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="aspect-square bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                <p className="text-white font-pinyon-script text-xl">Piece 1</p>
              </div>
              <h3 className="font-pinyon-script text-2xl text-white mb-2">Coming Soon</h3>
              <p className="text-purple-100 text-sm">Handcrafted with love</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="aspect-square bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                <p className="text-white font-pinyon-script text-xl">Piece 2</p>
              </div>
              <h3 className="font-pinyon-script text-2xl text-white mb-2">Coming Soon</h3>
              <p className="text-purple-100 text-sm">Handcrafted with love</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="aspect-square bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                <p className="text-white font-pinyon-script text-xl">Piece 3</p>
              </div>
              <h3 className="font-pinyon-script text-2xl text-white mb-2">Coming Soon</h3>
              <p className="text-purple-100 text-sm">Handcrafted with love</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
