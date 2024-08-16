import { Poppins } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/common/Sidebar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata = {
  title: "Ecommerce Admin Dashboard",
  description:
    "Admin dashboard to manage orders, inventory, payments, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex h-screen">
          <Sidebar />
          <main
            className="flex-grow bg-gray-100 p-8 overflow-auto"
            style={{ marginLeft: "16rem" }} // Aligns with the Sidebar's expanded width
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
