import { Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa6'
import destinations from '../data/destinations'

function FavoriteDestination() {
  return (
    <div className='container' id='destination'>
      <div className='flex flex-col items-center justify-between mb-12 text-center'>
        <div className='flex flex-col items-center gap-2 lg:items-start'>
          <span className='subtitle'>DESTINASI FAVORIT</span>
          <h2>Temukan Destinasi Favoritmu </h2>
        </div>
        <Link to='/destination' className='flex items-center gap-2 mt-4 font-semibold text-blue-600 lg:mt-0'>
          Lihat Semua <FaChevronRight />
        </Link>
      </div>
      <div className='grid grid-cols-2 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {destinations.map((dest) => (
          <Link key={dest.id} to='/' className='relative overflow-hidden rounded-2xl group'>
            <img src={`/destination${dest.id}.jpg`} alt='' className='object-cover w-full transition-all duration-300 ease-in-out group-hover:scale-110' />
            <div className='absolute bottom-0 left-0 px-6 py-2 rounded-r-lg backdrop-blur-sm bg-white/50'>
              <p className='font-bold text-slate-900'>{dest.name}</p>
              <p className='text-sm font-medium'>{dest.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FavoriteDestination
