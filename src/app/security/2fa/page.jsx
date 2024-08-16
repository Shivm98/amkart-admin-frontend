"use client";

import TwoFactorAuthForm from "@/components/security/two-factor-authentication/TwoFactorAuthForm";
import TwoFactorAuthHeader from "@/components/security/two-factor-authentication/TwoFactorAuthHeader";

export default function TwoFactorAuthPage() {
  return (
    <div className="flex flex-col space-y-6">
      <TwoFactorAuthHeader />
      <TwoFactorAuthForm />
    </div>
  );
}
