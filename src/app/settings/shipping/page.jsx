"use client";

import ShippingOptionsForm from "@/components/settings/shipping/ShippingOptionsForm";
import ShippingOptionsHeader from "@/components/settings/shipping/ShippingOptionsHeader";

export default function ShippingOptionsPage() {
  return (
    <div className="flex flex-col space-y-6">
      <ShippingOptionsHeader />
      <ShippingOptionsForm />
    </div>
  );
}
