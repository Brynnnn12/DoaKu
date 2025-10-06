import { motion } from "framer-motion";
import { FaPrayingHands, FaHeart } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex justify-center mb-6">
            <FaPrayingHands className="text-6xl text-blue-500" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 leading-tight">
            Selamat Datang Di
            <span className="block text-blue-600">Website Doa</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Temukan kedamaian melalui doa dan pelayanan kami. Jelajahi sumber
            daya spiritual yang dapat membimbing perjalanan Anda.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
            <FaHeart className="text-lg" />
            Mulai Berdoa
          </button>
          <button className="bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 flex items-center gap-2">
            Pelajari Lebih Lanjut
          </button>
        </motion.div>
      </div>
    </section>
  );
}
