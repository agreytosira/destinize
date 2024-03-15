import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function CallToAction() {
  return (
    <div className='container my-32'>
      <div className='grid items-center grid-cols-2 gap-4 overflow-hidden bg-blue-600 rounded-lg'>
        <div className='flex flex-col items-start gap-8 p-8 text-white'>
          <h2 className='text-white text-[40px] leading-snug'>Masih bingung cari tempat yang cocok? 🤔</h2>
          <p className='w-4/5 leading-8 text-slate-200'>Tenang, kami mempunyai fitur rekomendasi yang membantu kamu mencari tempat berlibur yang tepat dengan menjawab pertanyaan yang kami berikan.</p>
          <Link to='/destination' className='flex items-center gap-2 font-semibold text-white'>
            Mulai Sekarang <FaArrowRight />
          </Link>
        </div>
        <div className='flex justify-end h-full'>
          <img src='/cta.png' alt='CTA Illustration' className='h-full' />
        </div>
      </div>
    </div>
  )
}

export default CallToAction
