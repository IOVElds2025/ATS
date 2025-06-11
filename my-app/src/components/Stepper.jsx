import React from 'react';

const Stepper = ({ currentStep }) => {
  const steps = [
    { number: 1, label: 'Upload Resume' },
    { number: 2, label: 'Review Info' },
    { number: 3, label: 'Complete Profile' }
  ];

  return (
    <div className="flex items-center justify-center mb-8">
      <div className="flex items-center w-full max-w-4xl">
        {steps.map((step, index) => (
          <React.Fragment key={step.number}>
            <div className="flex flex-row gap-4 items-center justify-center flex-1">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step.number <= currentStep ? 'bg-[#1a2341]' : 'bg-[#9C9A9A]'
              } text-white font-bold`}>
                {step.number}
              </div>
              <span className={`text-center text-sm font-semibold ${
                step.number <= currentStep ? 'text-[#1a2341]' : 'text-gray-500'
              }`}>
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className="flex-1 rounded-xl h-[5px] bg-[#9C9A9A] mx-2">
                {step.number < currentStep && (
                  <div className="flex-1 rounded-xl h-[5px] w-8 bg-[#1a2341]"></div>
                )}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Stepper; 