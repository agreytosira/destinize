import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa6';

function GetToKnow() {
    return (
        <div className='container my-12'>
            <div className='flex items-center justify-between mb-12'>
                <div className='flex flex-col items-start gap-2'>
                    <span className='subtitle'>MENGENAL DESTINIZE</span>
                    <h2>Galeri Pariwisata & Blog Travel</h2>
                </div>
                <Link to='/destination' className='flex items-center gap-2 font-semibold text-blue-600'>
                    Lihat Semua <FaChevronRight />
                </Link>
            </div>
            <div className='grid grid-cols-4 gap-6'>
                <div className='col-span-1 rounded-lg overflow-hidden h-full'>
                    <div className='flex flex-col h-full'>
                        <img src='/bromo.jpg' alt='Bromo' />
                        <div className='p-8 bg-white shadow-lg space-y-4 h-full'>
                            <p className='text-sm font-semibold'>26 DESEMBER 2021</p>
                            <h6 className='text-base font-bold'>Tips naik gunung Bromo Biar gak capek cyin 😥😛</h6>
                            <p className='font-semibold text-sm'>Jadi gini gann, anda tau bromo? yaaa gunung kann!</p>
                            <Link to='/' className='inline-flex text-sm text-blue-600 font-semibold'>
                                Baca selengkapnya...
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='col-span-3'>
                    <iframe
                        className='rounded-lg aspect-video w-full'
                        src='https://www.youtube.com/embed/5UNQKrtqvhc?si=9FRxV2hnqicPXgNR'
                        title='YouTube video player'
                        frameborder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                        allowfullscreen></iframe>
                </div>
            </div>
            <div className='flex flex-col p-8 bg-[url(/bg-tips.jpg)]  bg-cover mt-6 rounded-lg bg-no-repeat bg-top'>
                <div className='w-1/2'>
                    <h5 className='text-white'>Tips meminum air kawah biar lidah melepuh 😁</h5>
                    <p className='text-slate-100 my-4'>Lidah melepuh? why nott, kawah bukan untuk dilihat kawan.. tapi untuk di minum.. rasakan kepanasan yang brutal 🔥</p>
                    <ul className='flex items-center gap-2 '>
                        <li>
                            <p className='font-semibold text-sm text-slate-300 '>Google</p>
                        </li>
                        <li>
                            <p className='font-semibold text-sm text-slate-300'>Trending</p>
                        </li>
                        <li>
                            <p className='font-semibold text-sm text-slate-300'>Baru</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default GetToKnow;
