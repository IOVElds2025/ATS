import { useState, useEffect } from "react";

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

export default CarouselSection;