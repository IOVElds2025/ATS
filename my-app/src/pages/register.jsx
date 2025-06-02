import React from 'react';
import RightSection from "../components/RightSection";
import LeftSection from "../components/LeftSection";

const Register = () => {
  return (
    <div className="flex">
    <div className="w-1/2 overflow-auto" style={{ marginRight: '50vw' }}>
      <LeftSection />
    </div>
  
    <div className="fixed right-0 top-0 w-1/2 h-screen">
      <RightSection />
    </div>
  </div>
  
  );
};

export default Register;
