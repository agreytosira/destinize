import { Link } from "react-router-dom";
import { FaEnvelope, FaFax, FaLocationPin, FaPhone } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="my-8">
      <div className="container">
        <div className="grid gap-4 sm:grid-cols-6">
          <div className="col-span-3">
            <img
              src="/icon-circle.png"
              alt="Icon Destinize Circle"
              className="mb-4"
            />
            <h5>Destinize</h5>
            <p className="mt-4 text-sm leading-6">
              Destinize adalah website atau layanan aplikasi yang membantu kamu
              memilih atau merekomendasikan tempat yang dijuluki ‘hidden gems’
              agar lebih dikenal dan ramai{" "}
              <Link to="/" className="font-semibold text-blue-600">
                Baca Selengkapnya
              </Link>
            </p>
            <ul className="mt-4 leading-8">
              <li>
                <Link
                  className="ease inline-flex items-center gap-2 text-sm text-slate-500 transition-all duration-300 hover:text-blue-600"
                  to="/"
                >
                  <FaPhone /> 0851-2345-6780
                </Link>
              </li>
              <li>
                <Link
                  className="ease inline-flex items-center gap-2 text-sm text-slate-500 transition-all duration-300 hover:text-blue-600"
                  to="/"
                >
                  <FaEnvelope /> support@destinize.id
                </Link>
              </li>
              <li>
                <Link
                  className="ease inline-flex items-center gap-2 text-sm text-slate-500 transition-all duration-300 hover:text-blue-600"
                  to="/"
                >
                  <FaLocationPin /> Kota Baru, Jambi, Indonesia
                </Link>
              </li>
              <li>
                <Link
                  className="ease inline-flex items-center gap-2 text-sm text-slate-500 transition-all duration-300 hover:text-blue-600"
                  to="/"
                >
                  <FaFax /> +1-212-9876543
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h6 className="mb-4 font-bold">Tentang</h6>
            <ul className="leading-8">
              <li>
                <Link
                  to="/"
                  className="ease text-sm text-slate-500 transition-all duration-300 hover:text-blue-600"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="ease text-sm text-slate-500 transition-all duration-300 hover:text-blue-600"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="ease text-sm text-slate-500 transition-all duration-300 hover:text-blue-600"
                >
                  Karir
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="ease text-sm text-slate-500 transition-all duration-300 hover:text-blue-600"
                >
                  Pekerjaan
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="ease text-sm text-slate-500 transition-all duration-300 hover:text-blue-600"
                >
                  Berita
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="ease text-sm text-slate-500 transition-all duration-300 hover:text-blue-600"
                >
                  Galeri
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="ease text-sm text-slate-500 transition-all duration-300 hover:text-blue-600"
                >
                  Afiliasi
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h6 className="mb-4 font-bold">Support</h6>
            <ul className="leading-8">
              <li>
                <Link
                  to="/"
                  className="ease text-sm text-slate-500 transition-all duration-300 hover:text-blue-600"
                >
                  Kontak Kami
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="ease text-sm text-slate-500 transition-all duration-300 hover:text-blue-600"
                >
                  Online Chat
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="ease text-sm text-slate-500 transition-all duration-300 hover:text-blue-600"
                >
                  WhatsApp
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="ease text-sm text-slate-500 transition-all duration-300 hover:text-blue-600"
                >
                  Telegram
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="ease text-sm text-slate-500 transition-all duration-300 hover:text-blue-600"
                >
                  Tiket
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="ease text-sm text-slate-500 transition-all duration-300 hover:text-blue-600"
                >
                  Call Center
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="ease text-sm text-slate-500 transition-all duration-300 hover:text-blue-600"
                >
                  Bantuan
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h6 className="mb-4 font-bold">FAQ</h6>
            <ul className="leading-8">
              <li>
                <Link
                  to="/"
                  className="ease text-sm text-slate-500 transition-all duration-300 hover:text-blue-600"
                >
                  Akun
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="ease text-sm text-slate-500 transition-all duration-300 hover:text-blue-600"
                >
                  Organisir
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="ease text-sm text-slate-500 transition-all duration-300 hover:text-blue-600"
                >
                  Order
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="ease text-sm text-slate-500 transition-all duration-300 hover:text-blue-600"
                >
                  Pembayaran
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="ease text-sm text-slate-500 transition-all duration-300 hover:text-blue-600"
                >
                  Pengembalian
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="ease text-sm text-slate-500 transition-all duration-300 hover:text-blue-600"
                >
                  Copyright
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="ease text-sm text-slate-500 transition-all duration-300 hover:text-blue-600"
                >
                  Bahasa
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mt-8">
        <div className="flex flex-col items-center justify-between sm:flex-row">
          <p className=" mb-4 text-sm sm:mb-0">© 2024, All Rights Reserved</p>
          <ul className="flex flex-row flex-wrap items-center justify-center gap-4 text-sm text-slate-500 sm:flex-row lg:gap-8">
            <li>
              <Link
                to="/"
                className="ease transition-all duration-300 hover:text-blue-600"
              >
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="ease transition-all duration-300 hover:text-blue-600"
              >
                Kontak
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="ease transition-all duration-300 hover:text-blue-600"
              >
                Privacy & Policy
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="ease transition-all duration-300 hover:text-blue-600"
              >
                Sitemap
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="ease transition-all duration-300 hover:text-blue-600"
              >
                Panduan Penggunaan
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
