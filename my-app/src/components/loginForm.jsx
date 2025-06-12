import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';




const LoginForm = ({setOpen}) => {
	const URL = 'http://192.168.100.71:4444/api/';

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
				credentials: "include",
				body: JSON.stringify(formData),
			});
			
			const data = await res.json();
			console.log('data : ', data);
			console.log('cookies1 : ', res.headers.values());
			console.log('cookies2 : ', data['Jwt-Access']);
			console.log('cookies3 : ', res.headers.get('Jwt-Access'));

			document.cookie = 'Jwt_Access='+data['Jwt_Access'];
			document.cookie = 'Jwt_Refresh='+data['Jwt_Refresh'];

			if (res.ok) {
				console.log('succes');
				// setOpen(false);
				navigate('/upload-resume/preview-info');
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

	const handleRedirect = () => {
		// setOpen(false);
		// navigate('/auth/register');
	}

	return (
	<div className='w-full h-full text[14px] flex flex-col justify-center items-start p-4 md:p-10 lg:p-28 gap-8'>
		<h1 className="font-bold text-2xl md:text-4xl" >Welcome back!</h1>
		<p className="text-gray-500 font-bold " >Welcome back, please enter your details</p>
		<form 
		className='w-full flex flex-col items-start gap-3'
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
			sign up
			</span>
		</p>
		</form>
	</div>
	);
}

export default LoginForm;
