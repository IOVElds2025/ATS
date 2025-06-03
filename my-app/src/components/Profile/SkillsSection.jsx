import React from "react";

const SkillsSection = () => {
  const skills = ["React", "TypeScript", "AWS"];
  return (
    <div className="card">
      <div className="card-header">
        <h3>Skills</h3>
      </div>
      <div className="tags">
        {skills.map((skill, index) => (
          <span key={index} className="tag">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
