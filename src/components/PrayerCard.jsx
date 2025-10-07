import { memo } from "react";
import { FaStar } from "react-icons/fa6";

const PrayerCard = ({ doa }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500 cursor-pointer">
      <div className="flex items-center mb-4">
        <FaStar className="w-8 h-8 text-blue-500 mr-3" />
        <h3 className="font-bold text-xl text-blue-800">{doa.doa}</h3>
      </div>
      <p className="text-gray-700 font-medium italic text-sm">{doa.ayat}</p>
    </div>
  );
};

export default memo(PrayerCard);
