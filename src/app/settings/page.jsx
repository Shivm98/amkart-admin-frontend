"use client";
import SiteSettingsHeader from "@/components/settings/SiteSettingsHeader";
import SiteSettingsForm from "@/components/settings/SiteSettingsForm";

export default function SiteSettingsPage() {
  return (
    <div className="flex flex-col space-y-6">
      <SiteSettingsHeader />
      <SiteSettingsForm />
    </div>
  );
}
