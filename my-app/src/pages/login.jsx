import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import slide1 from '../assets/charachters/slide1.png';
import slide2 from '../assets/charachters/slide2.png';
import slide3 from '../assets/charachters/slide3.png';
import honeycomb from '../assets/charachters/honeycomb.jpg';
import { FastForward } from 'lucide-react';

const LoginSlider = [
  {image: slide1, qoute: 'See why our service is right for you'},
  {image: slide2, qoute: 'Let’s work together'},
  {image: slide3, qoute: 'Join our family'}
];

const Login = () => {

	console.log('Login called')

	// const [showReset, setShowReset] = useState(false);
	// const [resetEmail, setResetEmail] = useState('');
	// const [resetMessage, setResetMessage] = useState('');


  const LoginRightSection = () => {

  	const [ open, setOpen ] = useState(false);
	
	useEffect(() => {
		setTimeout(setOpen(true), 500);
	}, []);
	
	return (
		<div 
			className={`fixed top-0 ${open == false ? 'left-0 w-screen'  : 'lg:left-1/2 not-lg:translate-x-full lg:w-1/2 not-lg:w-0'}  z-1 w-1/2 rounded-l-[40px] border-l-4 border-[#0A162F] drop-shadow-xl/80 inset-x-[-4] h-full bg-linear-to-tl from-[#1F325A] to-[#5F6C87] overflow-y-hidden overflow-x-hidden transition-all duration-3000 ease-in-out`}

		>
			<img src={honeycomb} className='z-[-1] object-cover bg-repeat-x rounded-l-4xl absolute h-full min-w-screen opacity-20' alt="" />
			<CarouselSection data={LoginSlider}  visible={open}/>
		</ div>
	);
  }

  const LoginForm = () => {
	const URL = 'http://192.168.100.62:4444/api/';

	const navigate = useNavigate();
	const [formData, setFormData] = useState({ email: '', password: '' });
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');
	const [loginSuccess, setLoginSuccess] = useState(false);




	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setMessage('');
		setLoading(true);

		try {
			const res = await fetch(URL+'auth/login/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			});

			const data = await res.json();
			console.log('data : ', data);

			if (res.ok) {
				console.log('succes');
				navigate('/');
			} else {				
				setMessage(data.detail || 'Login failed. Please check your credentials.');
			}
		} catch (error) {
			console.error('Login error:', error);
			setMessage('Failed to connect to the server. Please try again.');
		} finally {
			setLoading(false);
		}
	};


	return (
	<div className='w-full h-full flex flex-col justify-center items-start p-4 md:p-10 lg:28 gap-8'>
	  <h1 className="font-bold text-2xl md:text-4xl" >Welcome back!</h1>
	  <p className="text-gray-500 font-bold " >Welcome back, please enter your details</p>
	  <form 
		className='w-full flex flex-col items-start gap-6'
		onSubmit={handleSubmit}
		>
		<div className="flex w-full flex-col gap-2">
		  <label className="text-gray-900 font-semibold" >Email :</label>
		  <input
			type="email"
			name="email"
			value={formData.email}
			onChange={handleChange}
			placeholder='Enter Email'
			required
			className="w-full rounded-md px-6 py-3 border-1 border-[#D9D9D9]"
		  />
		</div>

		<div className="flex w-full flex-col gap-2">
		  <label className="text-gray-900 font-semibold">Password :</label>
		  <input
			type="password"
			name="password"
			value={formData.password}
			onChange={handleChange}
			placeholder='Enter Password'
			required
			className=" w-full rounded-md px-6 py-3 border-1 border-[#D9D9D9]"
		  />
		</div>

		<button
		  type="button"
		  className="font-semibold text-[#0A162F] cursor-pointer	"
		>
		  Forget Password
		</button>

		{message && <p className="text-sm text-red-500">{message}</p>}
		<div className='flex flex-col gap-2 w-full'>
			<button  
			type="submit" 
			className="flex justify-center items-center text-white py-2 px-2 rounded-md w-full bg-[#E84435] cursor-pointer	"
			>
			{loading ?
				<svg className="border-t-2 border-white rounded-2xl  mr-3 size-5 animate-spin" viewBox="0 0 24 24">
				</svg> :
				'Login'
			}
			</button>

			<div className='w-full flex justify-center items-center text-gray-400 text-[12px] gap-4'><hr className='w-1/4'/>OR<hr className='w-1/4'/></div>
			
			<button  
			type="submit" 
			className="flex flex-row justify-center gap-2 text-white py-2 px-2 rounded-md w-full bg-[#0A162F] cursor-pointer	"
			>
				<img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="" />
				Google
			</button>
		</div>
		<p className="w-full flex justify-center items-center gap-2 font-semibold">
		  Don't have an account?{' '}
		  <span 
			onClick={() => navigate('/auth/register')} 
			className="text-[#E84435] cursor-pointer	">
			Register here
		  </span>
		</p>
	  </form>
	</div>
	);
  }





	const CarouselSection = ({data, visible}) => {

		const [currentImage, setCurrentImage] = useState(0);
		const [show, setShow] = useState(false);

		useEffect(() => {
			const interval = setInterval(() => {
				setCurrentImage((prev) => (prev + 1) % data.length);
			}, 4000);
			return () => clearInterval(interval);
		}, [data.length]);

		useEffect(() => {
			if(visible)
				setTimeout(() => setShow(true), 3000);
		}, [show]);

		const goToSlide = (index) => {
			if (index !== currentImage) {
				setCurrentImage(index);
			}
		};

		
	return (
		<div 
			className={`relative ${show ? 'flex' : 'hidden'} flex-col items-center justify-center w-full h-full overflow-hidden`}
		>
			<div className="relative w-2/3 h-2/3 ">
				{data.map((item, index) => (
					<img
						key={index}
						src={item.image}
						alt={`Slide ${index + 1}`}
						className={`
							absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000
							${index === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'}
						`}
					/>
				))}
			</div>

			
			<div className="absolute bottom-1/2 right-6 transform translate-x-1/2 flex flex-col space-y-2">
				{data.map((_, index) => (
					<button
						key={index}
						onClick={() => goToSlide(index)}
						className={`w-2 rounded-full transition-all duration-300 cursor-pointer ${
							index === currentImage ? 'bg-[#E84435] h-6' : 'bg-gray-200 h-2'
						}`}
					/>
				))}
			</div>


			<div className='relative w-full flex justify-center items-center '>
				{data.map((item, index) => (
					<div 
						className={`absolute text-white font-semibold text-2xl mt-6  transition-opacity duration-400 
						${index === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'} `}
						key={index}
						>
							{data[currentImage].qoute}
					</div>
				))}
			</div>
		</div>
		);
	}






  return (
	<>
	
	<div className="bg-white overflow-y-hidden overflow-x-hidden h-screen w-screen flex flex-row text-black ">
	  <div className="z-0 h-full lg:w-1/2 not-lg:w-full overflow-y-hidden overflow-x-hidden p-2 md:p-6 lg:p-10 justify-center items-center">
		<h1 className='text-black text-2xl lg:text-3xl font-bold font-[Audiowide]'>Hive<span className='text-[#E84435]'>X</span>perince</h1> 
		  <LoginForm />
	  </div >
	</div>
		<LoginRightSection />
  	</>
  );
}

export default Login;