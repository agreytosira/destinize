import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import destinations from "../data/destinations";

function FavoriteDestination() {
  return (
    <div className="container" id="destination">
      <div className="mb-12 flex flex-col items-center justify-between text-center lg:flex-row">
        <div className="flex flex-col items-center gap-2 lg:items-start">
          <span className="subtitle">DESTINASI FAVORIT</span>
          <h2>Temukan Destinasi Favoritmu </h2>
        </div>
        <Link
          to="/destination"
          className="mt-4 flex items-center gap-2 font-semibold text-blue-600 lg:mt-0"
        >
          Lihat Semua <FaChevronRight />
        </Link>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
        {destinations.map((dest) => (
          <Link
            key={dest.id}
            to="/"
            className="group relative overflow-hidden rounded-2xl"
          >
            <img
              src={`/destination${dest.id}.jpg`}
              alt=""
              className="w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
            />
            <div className="absolute bottom-0 left-0 rounded-r-lg bg-white/50 px-6 py-2 backdrop-blur-sm">
              <p className="font-bold text-slate-900">{dest.name}</p>
              <p className="text-sm font-medium">{dest.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FavoriteDestination;
