import React from 'react';
import RightSection from "../components/RightSection";
import LeftSection from "../components/LeftSection";

const Register = () => {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      {/* Left side: form with vertical scroll if content overflows */}
      <div className="w-1/2 overflow-y-auto">
        <LeftSection />
      </div>

      {/* Right side */}
      <div className="w-1/2">
        <RightSection />
      </div>
    </div>
  );
};

export default Register;
