import { useEffect, useState, useMemo } from "react";
import API_URL from "../api/constants";
import Loading from "./Loading";
import { Link } from "react-router-dom";

export default function Doa() {
  const [doaList, setDoaList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setDoaList(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  const limitedDoaList = useMemo(() => doaList.slice(0, 3), [doaList]);
  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
            Doa Harian
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-6">
            {limitedDoaList.map((doa) => (
              <div
                key={doa.id}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500"
              >
                <div className="flex items-center mb-4">
                  <svg
                    className="w-8 h-8 text-blue-500 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 2L13.09 8.26L20 9L15 14.74L16.18 21.02L10 17.77L3.82 21.02L5 14.74L0 9L6.91 8.26L10 2Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <h3 className="font-bold text-xl text-blue-800">{doa.doa}</h3>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-700 font-medium italic">{doa.ayat}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {doa.latin}
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed">
                    Artinya: {doa.artinya}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <Link
              to="/doa"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Lihat Semua Doa
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
