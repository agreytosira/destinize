import { FaMagnifyingGlass } from 'react-icons/fa6';
import Dropdown from './Dropdown';
import { GoLocation } from 'react-icons/go';
import { IoGlobeOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { RiShoppingBasket2Line } from 'react-icons/ri';
import { FiUser } from 'react-icons/fi';

function Navbar() {
    const dropdownData = [
        { id: 1, label: 'Language', items: ['Bahasa Indonesia', 'English'] },
        { id: 2, label: 'Location', items: ['Yogyakarta', 'Bali', 'Ngawi', 'Jambi', 'Jakarta'] },
        { id: 3, label: 'Mountain', items: ['Merapi', 'Merbabu', 'Sumbing', 'Sindoro', 'Lawu'] },
        { id: 4, label: 'Beach', items: ['Parangtritis', 'Pantai Kukup', 'Pantai Nglambor', 'Pantai Drini', 'Pantai Baron'] },
        { id: 5, label: 'Culinary', items: ['Gudeg', 'Sate Klathak', 'Bakpia', 'Bakmi Jawa', 'Nasi Gudeg'] },
        { id: 6, label: 'Outbond', items: ['Rafting', 'Paintball', 'Camping', 'Flying Fox', 'ATV'] },
        { id: 7, label: 'History', items: ['Kraton', 'Taman Sari', 'Museum Ullen Sentalu', 'Museum Sonobudoyo', 'Museum Affandi'] },
        { id: 8, label: 'Education', items: ['Museum Ullen Sentalu', 'Museum Sonobudoyo', 'Museum Affandi', 'Museum Kekayon', 'Museum Batik'] },
        { id: 9, label: 'Romantic', items: ['Taman Sari', 'Pantai Nglambor', 'Pantai Drini', 'Pantai Baron', 'Pantai Kukup'] },
        { id: 10, label: 'Nature', items: ['Merapi', 'Merbabu', 'Sumbing', 'Sindoro', 'Lawu'] }
    ];

    return (
        <header className='w-full py-4 space-y-4 divide-y'>
            <nav className='container flex items-center justify-between'>
                <Link to='/'>
                    <img src='/Logo.png' alt='' className='pr-2 w-36' />
                </Link>
                <div className='flex items-center w-1/2 gap-4 px-4 py-1 rounded-full bg-slate-200'>
                    <FaMagnifyingGlass />
                    <input type='text' className='w-full py-2 text-sm bg-transparent outline-none focus:border-none ' placeholder='Cari apapun disini' />
                </div>
                <div className='flex items-center gap-2 text-slate-500'>
                    <IoGlobeOutline className='text-2xl' />
                    <Dropdown id={1} items={dropdownData[0].items}>
                        Bahasa Indonesia
                    </Dropdown>
                </div>
                <div className='flex items-center gap-2'>
                    <div className='p-3 bg-blue-100 rounded-full'>
                        <GoLocation className='text-blue-600' />
                    </div>
                    <div className='flex flex-col items-start'>
                        <p className='text-sm font-medium text-slate-500'>Lokasi</p>
                        <Dropdown id={2} label='Bahasa Indonesia' items={dropdownData[1].items} className='text-blue-600'>
                            <p className='font-bold text-blue-600'>Indonesia, Yogyakarta</p>
                        </Dropdown>
                    </div>
                </div>
            </nav>
            <div className='w-full'>
                <nav className='container flex items-center justify-between py-4 '>
                    <div className='flex items-center gap-8'>
                        {dropdownData
                            .filter((dropdown) => dropdown.id > 2)
                            .map((dropdown) => {
                                return (
                                    <Dropdown id={dropdown.id} key={dropdown.id} items={dropdown.items} className='text-slate-500' type='chevron'>
                                        {dropdown.label}
                                    </Dropdown>
                                );
                            })}
                    </div>

                    <div className='flex items-center gap-2'>
                        <Link to='/cart' className='inline-flex items-center justify-center text-xl transition-all duration-300 bg-blue-600 rounded-full text-slate-50 size-12 hover:bg-blue-800 ease'>
                            <RiShoppingBasket2Line />
                        </Link>
                        <Link to='/login' className='inline-flex items-center justify-center text-xl text-blue-600 transition-all duration-300 bg-blue-200 rounded-full size-12 hover:bg-blue-600 hover:text-white ease'>
                            <FiUser />
                        </Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
