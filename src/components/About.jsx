import { FaStar } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      ref={ref}
      className="bg-gradient-to-b from-blue-50 to-white p-4 mx-auto py-20"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold text-center text-blue-800 mb-12"
          variants={itemVariants}
        >
          Tentang Kami
        </motion.h1>
        <motion.div
          className="flex flex-col md:flex-row justify-center gap-8 items-center"
          variants={containerVariants}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2 border-l-4 border-blue-500 hover:shadow-xl transition-shadow duration-300"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <FaStar className="w-8 h-8 text-blue-500 mr-3" />
              <h2 className="text-2xl font-bold text-blue-800">
                Visi dan Misi
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Visi kami adalah menciptakan komunitas yang saling mendukung
              melalui doa dan pelayanan. Misi kami adalah menyediakan sumber
              daya dan dukungan bagi mereka yang membutuhkan.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/2 border-l-4 border-green-500 hover:shadow-xl transition-shadow duration-300"
            variants={itemVariants}
          >
            <div className="flex items-center mb-4">
              <FaStar className="w-8 h-8 text-green-500 mr-3" />
              <h2 className="text-2xl font-bold text-green-800">
                Nilai-Nilai Kami
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Kami menjunjung tinggi nilai-nilai seperti kasih, empati, dan
              keterbukaan. Kami percaya bahwa setiap orang berhak mendapatkan
              dukungan dan perhatian dalam perjalanan spiritual mereka.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}
