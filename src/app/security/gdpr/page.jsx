"use client";

import GDPRComplianceForm from "@/components/security/gdpr-compliance/GDPRComplianceForm";
import GDPRComplianceHeader from "@/components/security/gdpr-compliance/GDPRComplianceHeader";

export default function GDPRCompliancePage() {
  return (
    <div className="flex flex-col space-y-6">
      <GDPRComplianceHeader />
      <GDPRComplianceForm />
    </div>
  );
}
