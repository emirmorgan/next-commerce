import { ToastContainer } from "react-toastify";

import Footer from "@/components/Home/Layout/Footer";
import Navbar from "@/components/Home/Layout/Navbar";
import MobileNav from "@/components/Home/Layout/Navbar/Mobile";
import ScrollUp from "@/components/Home/Layout/ScrollUp";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <ScrollUp />
      <MobileNav />
      <main>
        <div className="h-full w-full container mx-auto p-2">{children}</div>
      </main>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        pauseOnHover={false}
      />
      <Footer />
    </>
  );
}
