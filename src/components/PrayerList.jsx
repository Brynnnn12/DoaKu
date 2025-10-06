import { useEffect, useState, memo } from "react";
import { Link } from "react-router-dom";
import API_URL from "../api/constants";
import Loading from "./Loading";

const PrayerCard = memo(({ doa }) => (
  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500 cursor-pointer">
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
    <p className="text-gray-700 font-medium italic text-sm">{doa.ayat}</p>
  </div>
));

export default function PrayerList() {
  const [doaList, setDoaList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setDoaList(data);
        } else {
          setDoaList([data]);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-12">
          Semua Doa
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doaList.map((doa) => (
            <Link key={doa.id} to={`/doa/${doa.id}`} className="block">
              <PrayerCard doa={doa} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
