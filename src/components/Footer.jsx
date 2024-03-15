import { Link } from 'react-router-dom'
import { FaEnvelope, FaFax, FaLocationPin, FaPhone } from 'react-icons/fa6'

function Footer() {
  return (
    <footer className='my-8'>
      <div className='container'>
        <div className='grid grid-cols-6 gap-4'>
          <div className='col-span-3'>
            <img src='/icon-circle.png' alt='Icon Destinize Circle' className='mb-4' />
            <h5>Destinize</h5>
            <p className='mt-4 text-sm leading-6'>
              Destinize adalah website atau layanan aplikasi yang membantu kamu memilih atau merekomendasikan tempat yang dijuluki ‘hidden gems’ agar lebih dikenal dan ramai{' '}
              <Link to='/' className='font-semibold text-blue-600'>
                Baca Selengkapnya
              </Link>
            </p>
            <ul className='mt-4 leading-8'>
              <li>
                <Link className='inline-flex items-center gap-2 text-sm transition-all duration-300 text-slate-500 ease hover:text-blue-600' to='/'>
                  <FaPhone /> 0851-2345-6780
                </Link>
              </li>
              <li>
                <Link className='inline-flex items-center gap-2 text-sm transition-all duration-300 text-slate-500 ease hover:text-blue-600' to='/'>
                  <FaEnvelope /> support@destinize.id
                </Link>
              </li>
              <li>
                <Link className='inline-flex items-center gap-2 text-sm transition-all duration-300 text-slate-500 ease hover:text-blue-600' to='/'>
                  <FaLocationPin /> Kota Baru, Jambi, Indonesia
                </Link>
              </li>
              <li>
                <Link className='inline-flex items-center gap-2 text-sm transition-all duration-300 text-slate-500 ease hover:text-blue-600' to='/'>
                  <FaFax /> +1-212-9876543
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className='mb-4 font-bold'>Tentang</h6>
            <ul className='leading-8'>
              <li>
                <Link to='/' className='text-sm transition-all duration-300 text-slate-500 hover:text-blue-600 ease'>
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to='/' className='text-sm transition-all duration-300 text-slate-500 hover:text-blue-600 ease'>
                  Blog
                </Link>
              </li>
              <li>
                <Link to='/' className='text-sm transition-all duration-300 text-slate-500 hover:text-blue-600 ease'>
                  Karir
                </Link>
              </li>
              <li>
                <Link to='/' className='text-sm transition-all duration-300 text-slate-500 hover:text-blue-600 ease'>
                  Pekerjaan
                </Link>
              </li>
              <li>
                <Link to='/' className='text-sm transition-all duration-300 text-slate-500 hover:text-blue-600 ease'>
                  Berita
                </Link>
              </li>
              <li>
                <Link to='/' className='text-sm transition-all duration-300 text-slate-500 hover:text-blue-600 ease'>
                  Galeri
                </Link>
              </li>
              <li>
                <Link to='/' className='text-sm transition-all duration-300 text-slate-500 hover:text-blue-600 ease'>
                  Afiliasi
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className='mb-4 font-bold'>Support</h6>
            <ul className='leading-8'>
              <li>
                <Link to='/' className='text-sm transition-all duration-300 text-slate-500 hover:text-blue-600 ease'>
                  Kontak Kami
                </Link>
              </li>
              <li>
                <Link to='/' className='text-sm transition-all duration-300 text-slate-500 hover:text-blue-600 ease'>
                  Online Chat
                </Link>
              </li>
              <li>
                <Link to='/' className='text-sm transition-all duration-300 text-slate-500 hover:text-blue-600 ease'>
                  WhatsApp
                </Link>
              </li>
              <li>
                <Link to='/' className='text-sm transition-all duration-300 text-slate-500 hover:text-blue-600 ease'>
                  Telegram
                </Link>
              </li>
              <li>
                <Link to='/' className='text-sm transition-all duration-300 text-slate-500 hover:text-blue-600 ease'>
                  Tiket
                </Link>
              </li>
              <li>
                <Link to='/' className='text-sm transition-all duration-300 text-slate-500 hover:text-blue-600 ease'>
                  Call Center
                </Link>
              </li>
              <li>
                <Link to='/' className='text-sm transition-all duration-300 text-slate-500 hover:text-blue-600 ease'>
                  Bantuan
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className='mb-4 font-bold'>FAQ</h6>
            <ul className='leading-8'>
              <li>
                <Link to='/' className='text-sm transition-all duration-300 text-slate-500 hover:text-blue-600 ease'>
                  Akun
                </Link>
              </li>
              <li>
                <Link to='/' className='text-sm transition-all duration-300 text-slate-500 hover:text-blue-600 ease'>
                  Organisir
                </Link>
              </li>
              <li>
                <Link to='/' className='text-sm transition-all duration-300 text-slate-500 hover:text-blue-600 ease'>
                  Order
                </Link>
              </li>
              <li>
                <Link to='/' className='text-sm transition-all duration-300 text-slate-500 hover:text-blue-600 ease'>
                  Pembayaran
                </Link>
              </li>
              <li>
                <Link to='/' className='text-sm transition-all duration-300 text-slate-500 hover:text-blue-600 ease'>
                  Pengembalian
                </Link>
              </li>
              <li>
                <Link to='/' className='text-sm transition-all duration-300 text-slate-500 hover:text-blue-600 ease'>
                  Copyright
                </Link>
              </li>
              <li>
                <Link to='/' className='text-sm transition-all duration-300 text-slate-500 hover:text-blue-600 ease'>
                  Bahasa
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='container mt-8'>
        <div className='flex items-center justify-between'>
          <p className='text-sm'>© 2024, All Rights Reserved</p>
          <ul className='flex items-center gap-8 text-sm text-slate-500'>
            <li>
              <Link to='/' className='transition-all duration-300 hover:text-blue-600 ease'>
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link to='/' className='transition-all duration-300 hover:text-blue-600 ease'>
                Kontak
              </Link>
            </li>
            <li>
              <Link to='/' className='transition-all duration-300 hover:text-blue-600 ease'>
                Privacy & Policy
              </Link>
            </li>
            <li>
              <Link to='/' className='transition-all duration-300 hover:text-blue-600 ease'>
                Sitemap
              </Link>
            </li>
            <li>
              <Link to='/' className='transition-all duration-300 hover:text-blue-600 ease'>
                Panduan Penggunaan
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
