import React from "react";
import Logo from "./Logo";
import NotificationButton from "./NotificationButton";
import UserProfile from "./UserProfile";

const TopNav = () => {
  return (
    <header className="bg-white shadow-sm w-full sticky top-0 z-10 text-gray-800 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Logo />
        <div className="flex items-center gap-6">
          <NotificationButton />
          <UserProfile name="Ayoub Rahmoun" />
        </div>
      </div>
    </header>
  );
};

export default TopNav;
