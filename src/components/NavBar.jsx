import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
import { RxHamburgerMenu, RxCross1 } from 'react-icons/rx';
import { useState } from 'react';
function NavBar() {
	const navlinks = ['Features', 'Pricing', 'Resources'];
	const [toggleMenu, setToggleMenu] = useState(false);

	return (
		<nav className='relative container mx-auto p-6'>
			{/* left side Logo and Links*/}
			<div className='flex items-center justify-between'>
				<div className='flex items-center space-x-20'>
					<img src={logo} alt='' />
					<div className='hidden space-x-8 font-bold lg:flex'>
						{navlinks.map((el) => {
							return (
								<NavLink
									className='text-gray-600 hover:text-red-400 transition-all duration-500'
									to={`/${el.toLowerCase()}`}
									key={el}>
									{el}
								</NavLink>
							);
						})}
					</div>
				</div>
				{/* right side link and button */}
				<div className='hidden lg:flex font-bold space-x-6 items-center text-gray-400'>
					<div className='hover:text-purple-700 cursor-pointer'>
						Login
					</div>
					<button className='px-8 py-3 font-bold text-white bg-cyan-500 rounded-full curosr-pointer hover:opacity-70'>
						Sign Up
					</button>
				</div>
				{toggleMenu ? (
					<RxCross1
						onClick={() => setToggleMenu(!toggleMenu)}
						className='lg:hidden cursor-pointer'
						size={32}
					/>
				) : (
					<RxHamburgerMenu
						onClick={() => setToggleMenu(!toggleMenu)}
						className='lg:hidden cursor-pointer'
						size={32}
					/>
				)}
			</div>
			{toggleMenu && (
				<div className='absolute lg:hidden flex flex-col  bg-purple-900 mx-auto left-6 right-6 top-20 max-w-[300px] rounded-md p-6'>
					<div className='flex flex-col justify-center items-center w-full space-y-5'>
						{navlinks.map((el) => {
							return (
								<NavLink
									className='text-white hover:text-red-400 transition-all duration-500'
									to={`/${el.toLowerCase()}`}
									onClick={() => setToggleMenu(!toggleMenu)}
									key={el}>
									{el}
								</NavLink>
							);
						})}
					</div>

					<div className='text-center mt-8 w-full border-t-2'>
						<div className='hover:text-purple-700 cursor-pointer text-white font-bold my-4'>
							Login
						</div>
						<button className=' w-full px-8 py-3 font-bold text-white bg-cyan-500 rounded-full curosr-pointer hover:opacity-70'>
							Sign Up
						</button>
					</div>
				</div>
			)}
		</nav>
	);
}

export default NavBar;
