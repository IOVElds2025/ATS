import React, { useState, useEffect } from 'react';
import honeycomb from '../assets/charachters/honeycomb.jpg';
import CarouselSection from './CarouselSection';


const LoginRightSection = ({data, visible}) => {
	console.log(visible);
	
	
	return (
		<div 
			className={`fixed top-0 ${visible == false ? 'left-0 w-screen'  : 'lg:left-1/2 lg:w-1/2 left-full w-0'}  z-1 w-1/2 rounded-l-[40px] border-l-4 border-[#0A162F] drop-shadow-xl/80 inset-x-[-4] h-full bg-linear-to-tl from-[#1F325A] to-[#5F6C87] overflow-y-hidden overflow-x-hidden transition-all duration-3000 ease-in-out`}

		>
			<img src={honeycomb} className='z-[-1] object-cover bg-repeat-x rounded-l-4xl absolute h-full min-w-screen opacity-20' alt="" />
			<CarouselSection data={data}  visible={visible}/>
		</ div>
	);
}

export default LoginRightSection;