export default function CollagesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-great-vibes text-6xl text-red-600 text-center mb-12">Conceptual Collages</h1>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 font-pinyon-script text-2xl">Coming Soon</p>
            </div>
            <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 font-pinyon-script text-2xl">Coming Soon</p>
            </div>
            <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500 font-pinyon-script text-2xl">Coming Soon</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 max-w-2xl mx-auto">
              Each collage tells a story, captures an essence, and invites interpretation. These pieces will be
              available for purchase as posters and souvenirs.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
