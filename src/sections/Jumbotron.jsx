import Button from '../components/Button'
function Jumbotron() {
  return (
    <div className='container mt-16 mb-4 lg:mt-0'>
      <div className='flex items-center gap-8 lg:grid lg:grid-cols-2'>
        <div className='flex flex-col items-center lg:items-start'>
          <span className='inline-flex items-center px-4 py-2 mb-3 text-sm font-bold text-blue-600 bg-blue-100 rounded-full'>Explore the wonderful indonesia!</span>
          <h1 className='text-6xl tracking-tighter text-center lg:text-7xl lg:text-left'>
            Liburan & nikmati <span className='text-blue-600'>tempat baru </span>di indonesia
          </h1>
          <p className='w-4/5 my-4 font-medium text-center lg:text-left'>Destinize membuat kamu selalu update terkait tempat liburan baru di Indonesia dengan mengikuti perkembangan para influencer di sosial media</p>
          <div className='flex flex-col items-center gap-4 sm:flex-row'>
            <Button href='/' type='link' color='blue'>
              Mulai sekarang →
            </Button>
            <Button type='play'>Putar Demo</Button>
          </div>
        </div>
        <div className='items-center justify-center hidden lg:flex'>
          <img src='/hero.svg' alt='Hero Image' />
        </div>
      </div>
    </div>
  )
}

export default Jumbotron
