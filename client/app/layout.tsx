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
import { ParamsProvider } from "@/context/ParamsContext";
import { ScrollableProvider } from "@/context/ScrollableContext";

const montserrat = Montserrat({
  weight: ["400", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "next-commerce | @emirmorgan",
  description:
    "next-commerce - Full-stack eCommerce app that built with Next.js and ASP.NET Core",
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
          <ParamsProvider>
            <ProductsProvider>
              <OrderProvider>
                <ShoppingCartProvider>
                  <ModalProvider>
                    <ScrollableProvider>{children}</ScrollableProvider>
                  </ModalProvider>
                </ShoppingCartProvider>
              </OrderProvider>
            </ProductsProvider>
          </ParamsProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
