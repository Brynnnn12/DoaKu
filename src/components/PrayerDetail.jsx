import { useCallback, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import API_URL from "../api/constants";
import Loading from "./Loading";

export default function PrayerDetail() {
  const { id } = useParams();
  const [doa, setDoa] = useState(null);
  const [loading, setLoading] = useState(true);

  const prayerDetail = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}/${id}`);
      const data = await response.json();
      if (Array.isArray(data) && data.length > 0) {
        setDoa(data[0]);
      } else {
        setDoa(data);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    prayerDetail();
  }, [prayerDetail]);

  if (loading) {
    return <Loading />;
  }

  if (!doa) {
    return (
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold text-blue-800 mb-8">
            Doa Tidak Ditemukan
          </h2>
          <Link
            to="/doa"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Kembali ke Daftar Doa
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="container mx-auto max-w-4xl">
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
            <h2 className="text-3xl font-bold text-blue-800">{doa.doa}</h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Ayat:
              </h3>
              <p className="text-gray-700 font-medium italic text-lg">
                {doa.ayat}
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Latin:
              </h3>
              <p className="text-gray-600 leading-relaxed">{doa.latin}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Artinya:
              </h3>
              <p className="text-gray-500 leading-relaxed">{doa.artinya}</p>
            </div>
          </div>
          <div className="mt-8 flex gap-4">
            <Link
              to="/doa"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Kembali ke Daftar Doa
            </Link>
            <Link
              to="/doa/random"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Doa Acak
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
