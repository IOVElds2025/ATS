import { useState, useEffect } from 'react';

import slide1 from '../assets/charachters/slide1.png';
import slide2 from '../assets/charachters/slide2.png';
import slide3 from '../assets/charachters/slide3.png';

import LoginRightSection from '../components/LoginRightSection';
import LoginForm from '../components/loginForm';
import { HandCoins } from 'lucide-react';

const LoginSlider = [
	{image: slide1, qoute: 'See why our service is right for you'},
	{image: slide2, qoute: 'Let’s work together'},
	{image: slide3, qoute: 'Join our family'}
];

const Login = () => {

	console.log('Login called')
	const [ open, setOpen ] = useState(false);
	
	useEffect(() => {
		setTimeout(setOpen(true), 1000);
	}, []);

	const HandleOpen = (flag) => {
		setOpen(flag);
	}

	return (
		<>
		<div className="bg-white overflow-y-hidden overflow-x-hidden h-screen w-screen flex flex-row text-black ">
			<div className="z-0 h-full lg:w-1/2 not-lg:w-full overflow-y-hidden overflow-x-hidden p-2 md:p-6 lg:p-10 justify-center items-center">
			<h1 className='text-black text-2xl lg:text-3xl font-bold font-[Audiowide]'>Hive<span className='text-[#E84435]'>X</span>perince</h1> 
				<LoginForm setOpen={HandleOpen} />
			</div >
		</div>
			<LoginRightSection data={LoginSlider} visible={open} />
		</>
	);
}

export default Login;