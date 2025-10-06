import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import API_URL from "../api/constants";
import Loading from "./Loading";

export default function PrayerRandom() {
  const [doa, setDoa] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchRandomPrayer = useCallback(() => {
    setLoading(true);
    fetch(`${API_URL}/doa/v1/random`)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setDoa(data[0]);
        } else {
          setDoa(data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchRandomPrayer();
  }, [fetchRandomPrayer]);

  if (loading) {
    return <Loading />;
  }

  if (!doa) {
    return (
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-8">
            Doa Acak Tidak Dapat Dimuat
          </h2>
          <button
            onClick={fetchRandomPrayer}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Coba Lagi
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
          Doa Acak
        </h2>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <div className="flex items-center mb-6">
            <svg
              className="w-10 h-10 text-blue-500 mr-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 2L13.09 8.26L20 9L15 14.74L16.18 21.02L10 17.77L3.82 21.02L5 14.74L0 9L6.91 8.26L10 2Z"
                clipRule="evenodd"
              />
            </svg>
            <h3 className="text-3xl font-bold text-blue-800">{doa.doa}</h3>
          </div>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Ayat:
              </h4>
              <p className="text-gray-700 font-medium italic text-lg">
                {doa.ayat}
              </p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Latin:
              </h4>
              <p className="text-gray-600 leading-relaxed">{doa.latin}</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                Artinya:
              </h4>
              <p className="text-gray-500 leading-relaxed">{doa.artinya}</p>
            </div>
          </div>
          <div className="mt-8 flex gap-4">
            <button
              onClick={fetchRandomPrayer}
              className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
            >
              Doa Acak Lain
            </button>
            <Link
              to="/doa"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Lihat Semua Doa
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
