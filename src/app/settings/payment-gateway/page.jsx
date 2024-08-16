"use client";

import PaymentGatewayForm from "@/components/settings/payment-gateway/PaymentGatewayForm";
import PaymentGatewayHeader from "@/components/settings/payment-gateway/PaymentGatewayHeader";

export default function PaymentGatewayPage() {
  return (
    <div className="flex flex-col space-y-6">
      <PaymentGatewayHeader />
      <PaymentGatewayForm />
    </div>
  );
}
