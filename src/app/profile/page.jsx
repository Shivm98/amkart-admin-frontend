"use client";

import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileDetails from "@/components/profile/ProfileDetails";
import ChangePassword from "@/components/profile/ChangePassword";

export default function ProfilePage() {
  return (
    <div className="w-full mx-auto p-6">
      <ProfileHeader />
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2">
        <ProfileDetails />
        <ChangePassword />
      </div>
    </div>
  );
}
