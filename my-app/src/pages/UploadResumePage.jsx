import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ResumeUploader from '../components/ResumeUploader';
import PersonalInfo from '../components/PersonalInfo';
import WorkExperience from '../components/WorkExperience';
import Education from '../components/Education';
import Skills from '../components/Skills';
import Languages from '../components/Languages';
import Stepper from '../components/Stepper';

const UploadResume = () => {
	console.log('uploadResume called');
	
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		personal: [],
		experiences: [],
		education: [],
		skills: [],
		languages: [],
		file: null
	});

	useEffect(() => {
		const savedData = JSON.parse(localStorage.getItem('resumeForm'));
		if (savedData) {
			setFormData(savedData);
		}
	}, []);

	const handleContinue = () => {
		// Validate required fields
		const requiredFields = document.querySelectorAll('input[required], select[required], textarea[required]');
		let isValid = true;

		requiredFields.forEach(field => {
			if (!field.value.trim()) {
				field.classList.add('border-red-500');
				isValid = false;
			} else {
				field.classList.remove('border-red-500');
			}
		});

		if (!isValid) {
			alert('Please fill all required fields.');
			return;
		}

		localStorage.setItem('resumeForm', JSON.stringify(formData));
		navigate('/review-info');
	};

	const Header = () => {
		return (
		<header className="bg-white shadow-sm w-full sticky top-0 z-10">
			<div className="max-w-7xl mx-auto px-6 py-4 flex items-center">
				<span className="font-['audiowide'] text-2xl font-400 tracking-tight">
					<span className="text-black">Hive</span>
					<span className="text-[#E84435]">X</span>
					<span className="text-black">perience</span>
				</span>
			</div>
		</header>
		);
	}

	return (
		<div className="min-h-screen w-full flex flex-col justify-center items-center text-gray-800 font-sans bg-[#D9D9D9]">
			
			{/* Header */}
			<Header />

			<div className="flex flex-col py-12 gap-2 px-2 max-w-4xl w-full border-2">
				<Stepper currentStep={1} />
				
				<div className="bg-white rounded-md p-8 shadow mb-8">
					<h2 className="text-2xl font-bold mb-6">Upload your Resume</h2>
					<ResumeUploader onFileUpload={(file) => setFormData(prev => ({ ...prev, file }))} />
				</div>

				<div className="bg-white rounded-md shadow py-4 px-8 mb-8">
					<h2 className="text-2xl font-bold mb-6">Preview Your Information</h2>
					
					<PersonalInfo 
						data={formData.personal} 
						onChange={(data) => setFormData(prev => ({ ...prev, personal: data }))} 
					/>
					
					<hr className="my-8 opacity-10" />
					
					<WorkExperience 
						experiences={formData.experiences} 
						onChange={(experiences) => setFormData(prev => ({ ...prev, experiences }))} 
					/>
					
					<hr className="my-8 opacity-10" />
					
					<Education 
						education={formData.education} 
						onChange={(education) => setFormData(prev => ({ ...prev, education }))} 
					/>
					
					<hr className="my-8 opacity-10" />
					
					<Skills 
						skills={formData.skills} 
						onChange={(skills) => setFormData(prev => ({ ...prev, skills }))} 
					/>
					
					<hr className="my-8 opacity-10" />
					
					<Languages 
						languages={formData.languages} 
						onChange={(languages) => setFormData(prev => ({ ...prev, languages }))} 
					/>

					<div className="flex justify-end">
						<button 
							onClick={handleContinue}
							className="bg-[#1a2341] text-white px-8 py-2 rounded-lg font-semibold hover:bg-[#11182b] flex items-center gap-2"
						>
							Continue 
							<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default UploadResume; 