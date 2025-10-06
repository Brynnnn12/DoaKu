export default function About() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white p-4 mx-auto py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-blue-800 mb-12">
          Tentang Kami
        </h1>
        <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2 border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-blue-500 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className="text-2xl font-bold text-blue-800">
                Visi dan Misi
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Visi kami adalah menciptakan komunitas yang saling mendukung
              melalui doa dan pelayanan. Misi kami adalah menyediakan sumber
              daya dan dukungan bagi mereka yang membutuhkan.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2 border-l-4 border-green-500 hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center mb-4">
              <svg
                className="w-8 h-8 text-green-500 mr-3"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              <h2 className="text-2xl font-bold text-green-800">
                Nilai-Nilai Kami
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Kami menjunjung tinggi nilai-nilai seperti kasih, empati, dan
              keterbukaan. Kami percaya bahwa setiap orang berhak mendapatkan
              dukungan dan perhatian dalam perjalanan spiritual mereka.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
