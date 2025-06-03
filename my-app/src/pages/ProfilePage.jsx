import React from "react";
import "./ProfilePage.css";


import DashHeader from "../components/Profile/Dashheader";
import Sidebar from "../components/Profile/Sidebar";
import ProfileHeader from "../components/Profile/ProfileHeader";
import AboutSection from "../components/Profile/AboutSection";
import ExperienceSection from "../components/Profile/ExperienceSection";
import EducationSection from "../components/Profile/EducationSection";
import SkillsSection from "../components/Profile/SkillsSection";
import LanguagesSection from "../components/Profile/LanguagesSection";
import CertificationsSection from "../components/Profile/CertificationsSection";

const ProfilePage = () => {
  return (
    <div className="profile-container">
      {/* Ajout du DashHeader et du Sidebar */}
      <DashHeader />
      <Sidebar />

      {/* En-tête avec avatar, nom et bouton */}
      <ProfileHeader />

      {/* Contenu principal en deux colonnes responsives */}
      <div className="main-content">
        {/* Colonne de gauche : infos personnelles */}
        <div className="left">
          <AboutSection />
          <ExperienceSection />
          <EducationSection />
        </div>

        {/* Colonne de droite : compétences et langues */}
        <div className="right">
          <SkillsSection />
          <LanguagesSection />
          <CertificationsSection />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
