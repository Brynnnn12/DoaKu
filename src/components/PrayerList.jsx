import { useState } from "react";
import { Link } from "react-router-dom";
import API_URL from "../api/constants";
import Loading from "./Loading";
import { FaStar } from "react-icons/fa6";
import { useCachedFetch } from "../hooks/useCachedFetch";
import PrayerCard from "./PrayerCard";

export default function PrayerList() {
  const { data: doaList, loading } = useCachedFetch(API_URL);
  const [displayedCount, setDisplayedCount] = useState(10);

  const displayedDoaList =
    doaList && Array.isArray(doaList) ? doaList.slice(0, displayedCount) : [];
  const hasMore =
    doaList && Array.isArray(doaList) && displayedCount < doaList.length;

  const loadMore = () => {
    setDisplayedCount((prev) => prev + 10);
  };

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
          {displayedDoaList.map((doa) => (
            <Link key={doa.id} to={`/doa/${doa.id}`} className="block">
              <PrayerCard doa={doa} />
            </Link>
          ))}
        </div>
        {hasMore && (
          <div className="text-center mt-12">
            <button
              onClick={loadMore}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
