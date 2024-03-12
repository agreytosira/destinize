import Button from '../components/Button'
function Jumbotron() {
  return (
    <div className='container mb-4'>
      <div className='grid items-center grid-cols-2 gap-8'>
        <div className='flex flex-col items-start'>
          <span className='inline-flex items-center px-4 py-2 mb-3 text-sm font-bold text-blue-600 bg-blue-100 rounded-full'>🛩️ • Explore the wonderful indonesia!</span>
          <h1 className='tracking-tighter'>
            Liburan & nikmati <span className='text-blue-600'>tempat baru </span>di indonesia ️🏝
          </h1>
          <p className='w-4/5 my-4 font-medium'>Destinize membuat kamu selalu update terkait tempat liburan baru di Indonesia dengan mengikuti perkembangan para influencer di sosial media ✨</p>
          <div className='flex items-center gap-4'>
            <Button href='/' type='link' color='blue'>
              Mulai sekarang →
            </Button>
            <Button type='play'>Putar Demo</Button>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <img src='/hero.svg' alt='Hero Image' />
        </div>
      </div>
    </div>
  )
}

export default Jumbotron
