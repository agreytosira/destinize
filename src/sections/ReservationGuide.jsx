function ReservationGuide() {
  return (
    <div className='container my-16'>
      <div className='grid items-center gap-4 lg:grid-cols-2'>
        <div className='flex flex-col'>
          <div className='flex flex-col gap-2'>
            <span className='subtitle'>RESERVASI TEMPAT</span>
            <h2>Gak mau ngantri? reservasi aja! 🤙🏻</h2>
          </div>
          <div className='flex flex-col gap-8 mt-10'>
            <div className='flex items-center gap-4'>
              <div className='size-14'>
                <img src='/guide1.png' className='w-full' alt='Guide 1 Icon' />
              </div>
              <div>
                <h6 className='text-lg font-bold'>Cari tempat yang kamu mau</h6>
                <p className='w-full lg:w-2/3'>Temukan destinasi selanjutnya yang akan kamu kunjungi dengan Destinize</p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <div className='size-14'>
                <img src='/guide2.png' className='w-full' alt='Guide 1 Icon' />
              </div>
              <div>
                <h6 className='text-lg font-bold'>Isi data dan konfirmasi pembayaran</h6>
                <p className='w-full lg:w-2/3'>Tulis dan lengkapi data kamu untuk keperluan data booking</p>
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <div className='size-14'>
                <img src='/guide3.png' className='w-full' alt='Guide 1 Icon' />
              </div>
              <div>
                <h6 className='text-lg font-bold'>Tinggal masuk dan enjoy!</h6>
                <p className='w-full lg:w-2/3'>Kamu bisa langsung masuk dan enjoy liburan kamu tanpa hambatan</p>
              </div>
            </div>
          </div>
        </div>
        <img className='hidden w-full lg:flex' src='/reservation-guide.svg' alt='Reservation Guide Illustration' />
      </div>
    </div>
  )
}

export default ReservationGuide
