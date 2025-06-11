import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterForm = ( {open, setOpen} ) => {
	const URL = 'http://192.168.100.71:4444/api/';

	const navigate = useNavigate();
	const [formData, setFormData] = useState({ email: '', password: '' });
	const [loading, setLoading] = useState(false);
	const [message, setMessage] = useState('');
	const [correctpass, setCorrectpass] = useState(0);
	const [loginSuccess, setLoginSuccess] = useState(false);




	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		// if (formData.password && formData.ConfirmPassword)
		// {

		// }
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setMessage('');
		setLoading(true);

		console.log("data : ", formData);
		

		try {
			const res = await fetch(URL+'auth/register/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData),
			});

			const data = await res.json();
			console.log('data : ', data);

			if (res.ok) {
				console.log('succes');
				navigate('/auth/login');
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
	<div className='w-full h-full text-[14px] flex flex-col justify-center items-start p-4 md:p-10 lg:p-14 xl:28 gap-8 '>
		<h1 className="font-bold text-2xl md:text-4xl" >Registration</h1>
		<form 
		className='w-full flex flex-col items-start gap-3'
		onSubmit={handleSubmit}
		>
		<div className='flex w-full gap-3 flex-row justify-between'>
			<div className="flex w-full flex-col gap-2">
				<label className="text-gray-900 font-semibold" >First Name :</label>
				<input
				type="text"
				name="first_name"
				value={formData.first_name}
				onChange={handleChange}
				placeholder='Enter your First Name'
				required
				className="w-full rounded-md px-6 py-3 border-1 border-[#D9D9D9]"
				/>
			</div>
			<div className="flex w-full flex-col gap-2">
				<label className="text-gray-900 font-semibold" >Last Name :</label>
				<input
				type="text"
				name="last_name"
				value={formData.last_name}
				onChange={handleChange}
				placeholder='Enter your Last Name'
				required
				className="w-full rounded-md px-6 py-3 border-1 border-[#D9D9D9]"
				/>
			</div>
		</div>
		<div className="flex w-full flex-col gap-2">
			<label className="text-gray-900 font-semibold" >Email :</label>
			<input
			type="email"
			name="email"
			value={formData.email}
			onChange={handleChange}
			placeholder='email@example.com'
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


		<div className="flex w-full flex-col gap-2">
			<label className="text-gray-900 font-semibold">Confirm Password :</label>
			<input
			type="password"
			name="ConfirmPassword"
			value={formData.ConfirmPassword}
			onChange={handleChange}
			placeholder='Confirm  Password'
			required
			className=" w-full rounded-md px-6 py-3 border-1 border-[#D9D9D9]"
			/>
		</div>

		<div className='w-full'>
			<label className="block text-gray-700 text-sm font-bold mb-2">
				Select your role :
			</label>
			<div className="flex space-x-4">
				<button
				type="button"
				className={`cursor-pointer w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
					formData.role === 'candidate' ? 'bg-[#E84435] text-white' : 'bg-gray-300 text-gray-700'
				}`}
				onClick={() => setFormData({ ...formData, role: 'candidate' })}
				>
				Candidate
				</button>
				<button
				type="button"
				className={`cursor-pointer w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline ${
					formData.role === 'recruiter' ? 'bg-[#E84435] text-white' : 'bg-gray-300 text-gray-700'
				}`}
				onClick={() => setFormData({ ...formData, role: 'recruiter' })}
				>
				Recruiter
				</button>
			</div>
		</div>

		{message && <p className="text-sm text-red-500">{message}</p>}
		<div className='flex flex-col gap-2 w-full'>
			<button  
			type="submit" 
			className="flex justify-center items-center text-white py-2 px-2 rounded-md w-full bg-[#E84435] cursor-pointer	"
			>
			{loading ?
				<svg className="border-t-2 border-white rounded-2xl  mr-3 size-5 animate-spin" viewBox="0 0 24 24">
				</svg> :
				'Register'
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
			already have an account ?{' '}
			<span 
			onClick={() => navigate('/auth/login')} 
			className="text-[#E84435] cursor-pointer">
			 sign in 
			</span>
		</p>
		</form>
	</div>
	);
}

export default RegisterForm;
