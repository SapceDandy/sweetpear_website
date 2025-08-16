export default function VlogsPage() {
  return (
    <div className="min-h-screen bg-blue-600">
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-great-vibes text-6xl text-white text-center mb-12">Cinematic Vlogs</h1>

          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center">
              <h2 className="font-pinyon-script text-3xl text-white mb-4">Documentary Series</h2>
              <p className="text-blue-100 mb-6">
                Cinematic vlogs and documentaries exploring creativity, culture, and personal journeys.
              </p>
              <a
                href="#"
                className="inline-block bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
              >
                Visit YouTube Channel
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
