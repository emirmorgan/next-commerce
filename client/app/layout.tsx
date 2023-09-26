import { Metadata } from "next";
import { Montserrat } from "next/font/google";

import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

//Contexts
import { ShoppingCartProvider } from "@/context/ShoppingCartContext";
import { AuthProvider } from "@/context/AuthContext";
import { ModalProvider } from "@/context/ModalContext";
import { OrderProvider } from "@/context/OrderContext";
import { ProductsProvider } from "@/context/ProductsContext";

const montserrat = Montserrat({
  weight: ["400", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Full-stack eCommerce",
  description:
    "Full-stack eCommerce app that built with Next.js and ASP.NET Core",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <AuthProvider>
          <ProductsProvider>
            <OrderProvider>
              <ShoppingCartProvider>
                <ModalProvider>{children}</ModalProvider>
              </ShoppingCartProvider>
            </OrderProvider>
          </ProductsProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
