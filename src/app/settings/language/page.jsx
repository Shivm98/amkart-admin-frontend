"use client";

import LanguageSettingsForm from "@/components/settings/language/LanguageSettingsForm";
import LanguageSettingsHeader from "@/components/settings/language/LanguageSettingsHeader";

export default function LanguageSettingsPage() {
  return (
    <div className="flex flex-col space-y-6">
      <LanguageSettingsHeader />
      <LanguageSettingsForm />
    </div>
  );
}
