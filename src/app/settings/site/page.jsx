"use client";

import SiteSettingsForm from "@/components/settings/SiteSettingsForm";
import SiteSettingsHeader from "@/components/settings/SiteSettingsHeader";

export default function SiteSettingsPage() {
  return (
    <div className="flex flex-col space-y-6">
      <SiteSettingsHeader />
      <SiteSettingsForm />
    </div>
  );
}
