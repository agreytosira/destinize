import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <div className="container my-32">
      <div className="items-center gap-4 overflow-hidden rounded-lg bg-blue-600 lg:grid lg:grid-cols-2">
        <div className="flex flex-col items-start gap-8 p-8 text-white">
          <h3 className="leading-snug text-white">
            Masih bingung cari tempat yang cocok? 🤔
          </h3>
          <p className="w-4/5 leading-8 text-slate-200">
            Tenang, kami mempunyai fitur rekomendasi yang membantu kamu mencari
            tempat berlibur yang tepat dengan menjawab pertanyaan yang kami
            berikan.
          </p>
          <Link
            to="/destination"
            className="flex items-center gap-2 font-semibold text-white"
          >
            Mulai Sekarang <FaArrowRight />
          </Link>
        </div>
        <div className="flex h-full justify-end">
          <img
            src="/cta.png"
            alt="CTA Illustration"
            className="hidden h-full lg:flex"
          />
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
