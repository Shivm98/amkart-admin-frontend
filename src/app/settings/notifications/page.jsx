"use client";

import NotificationSettingsForm from "@/components/settings/notifications/NotificationSettingsForm";
import NotificationSettingsHeader from "@/components/settings/notifications/NotificationSettingsHeader";

export default function NotificationSettingsPage() {
  return (
    <div className="flex flex-col space-y-6">
      <NotificationSettingsHeader />
      <NotificationSettingsForm />
    </div>
  );
}
