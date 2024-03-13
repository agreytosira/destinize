import { Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa6'
import destinations from '../data/destinations'

function FavoriteDestination() {
  return (
    <div className='container '>
      <div className='flex items-center justify-between mb-12'>
        <div className='flex flex-col items-start gap-2'>
          <span className='font-bold tracking-[.25rem] text-blue-600'>DESTINASI FAVORIT</span>
          <h2>Temukan Destinasi Favoritmu </h2>
        </div>
        <Link to='/destination' className='flex items-center gap-2 font-semibold text-blue-600'>
          Lihat Semua <FaChevronRight />
        </Link>
      </div>
      <div className='grid grid-cols-4 gap-6'>
        {destinations.map((dest) => (
          <Link key={dest.id} to='/' className='relative overflow-hidden rounded-2xl group'>
            <img src={`/destination${dest.id}.jpg`} alt='' className='object-cover w-full transition-all duration-300 ease-in-out group-hover:scale-110' />
            <div className='absolute bottom-0 left-0 px-6 py-2 rounded-r-lg backdrop-blur-sm bg-white/50'>
              <p className='font-semibold text-slate-900'>{dest.name}</p>
              <p className='font-medium'>{dest.location}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default FavoriteDestination
