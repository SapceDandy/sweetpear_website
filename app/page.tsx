import Link from "next/link"
import RotatingLogo from "../components/rotating-logo"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <div className="relative h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="mb-8">
            <RotatingLogo size="hero" />
          </div>
          <p className="text-gray-600 text-xl md:text-2xl font-light tracking-wide font-pinyon-script">
            Digital Magazine
          </p>
          <div className="mt-12 space-y-4">
            <p className="text-gray-500">Writing • Conceptual Collages • Cinematic Vlogs • Handmade Art</p>
          </div>
        </div>

        <div className="absolute top-20 left-20 w-2 h-20 bg-red-600 opacity-20"></div>
        <div className="absolute bottom-20 right-20 w-20 h-2 bg-red-600 opacity-20"></div>
      </div>

      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Blog/Writing Section - Green backdrop */}
            <Link href="/blog" className="group cursor-pointer">
              <div className="relative h-80 bg-green-600 flex items-center justify-center hover:bg-green-700 transition-colors duration-300">
                <div className="text-center text-white">
                  <h2 className="font-pinyon-script text-4xl mb-4">Blog</h2>
                  <p className="text-green-100 text-sm">Writing & Thoughts</p>
                </div>
              </div>
            </Link>

            {/* Conceptual Collages - White backdrop */}
            <Link href="/collages" className="group cursor-pointer">
              <div className="relative h-80 bg-white border-2 border-gray-200 flex items-center justify-center hover:border-gray-300 transition-colors duration-300">
                <div className="text-center text-gray-800">
                  <h2 className="font-pinyon-script text-4xl mb-4">Collages</h2>
                  <p className="text-gray-600 text-sm">Conceptual Art</p>
                </div>
              </div>
            </Link>

            {/* Vlogs/Documentaries - Different backdrop color */}
            <Link href="/vlogs" className="group cursor-pointer">
              <div className="relative h-80 bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors duration-300">
                <div className="text-center text-white">
                  <h2 className="font-pinyon-script text-4xl mb-4">Vlogs</h2>
                  <p className="text-blue-100 text-sm">Cinematic Stories</p>
                </div>
              </div>
            </Link>

            {/* Handmade Art */}
            <Link href="/art" className="group cursor-pointer">
              <div className="relative h-80 bg-purple-600 flex items-center justify-center hover:bg-purple-700 transition-colors duration-300">
                <div className="text-center text-white">
                  <h2 className="font-pinyon-script text-4xl mb-4">Art</h2>
                  <p className="text-purple-100 text-sm">Handmade Pieces</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
