import Image from "next/image";
import Link from "next/link";

import {
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#f9f9f9] text-black p-4">
        <div className="flex flex-col gap-4 container mx-auto my-4">
          <div className="flex justify-between flex-wrap gap-3">
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold select-none">SHOP</h1>
              <ul className="flex flex-col gap-2 mt-2 text-gray-700">
                <li>
                  <Link href="/category?=best-sellers">
                    <span className="hover:text-black hover:underline transition-all ease-linear">
                      Best Sellers
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/category?=womens">
                    <span className="hover:text-black hover:underline transition-all ease-linear">
                      Womens
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/category?=mens">
                    <span className="hover:text-black hover:underline transition-all ease-linear">
                      Mens
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/category?=kids">
                    <span className="hover:text-black hover:underline transition-all ease-linear">
                      Kids
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold mb-2 select-none">CAMPAIGNS</h1>
              <ul className="flex flex-col gap-2 text-gray-700">
                <li>
                  <Link href="/campaign?=nike">
                    <span className="hover:text-black hover:underline transition-all ease-linear">
                      %15 off Nike
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/campaign?=lacoste">
                    <span className="hover:text-black hover:underline transition-all ease-linear">
                      %30 off Lacoste
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/campaign?=adidas">
                    <span className="hover:text-black hover:underline transition-all ease-linear">
                      %40 off Adidas
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold mb-2 select-none">HELP</h1>
              <ul className="flex flex-col gap-2 text-gray-700">
                <li>
                  <Link href="/faq">
                    <span className="hover:text-black hover:underline transition-all ease-linear">
                      F.A.Q
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/support">
                    <span className="hover:text-black hover:underline transition-all ease-linear">
                      Live Support
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/terms">
                    <span className="hover:text-black hover:underline transition-all ease-linear">
                      Terms of Use
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy">
                    <span className="hover:text-black hover:underline transition-all ease-linear">
                      Privacy
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-bold mb-2 select-none">SOCIALS</h1>
              <ul className="flex gap-2">
                <li className="hover:bg-black/5 border rounded-full transition-all ease-linear">
                  <Link
                    className="flex justify-start items-center gap-2 p-2"
                    href="https://instagram.com"
                  >
                    <AiOutlineInstagram size={20} />
                  </Link>
                </li>
                <li className="hover:bg-black/5 border rounded-full transition-all ease-linear">
                  <Link
                    className="flex justify-start items-center gap-2 p-2"
                    href="https://x.com"
                  >
                    <AiOutlineTwitter size={20} />
                  </Link>
                </li>
                <li className="hover:bg-black/5 border rounded-full transition-all ease-linear">
                  <Link
                    className="flex justify-start items-center gap-2 p-2"
                    href="https://facebook.com"
                  >
                    <AiOutlineFacebook size={20} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:items-end gap-3">
            <div className="flex flex-col">
              <h1 className="text-lg font-bold mb-2 select-none">APPS</h1>
              <Link
                className="relative w-36 h-12 mb-1 rounded-lg"
                href="https://www.apple.com/"
              >
                <Image
                  fill
                  src="/assets/app-store.svg"
                  alt="Download on the App Store"
                />
              </Link>
              <Link
                className="relative w-36 h-12 rounded-lg"
                href="https://play.google.com/"
              >
                <Image
                  fill
                  src="/assets/google-play.svg"
                  alt="Download on the Google Play"
                />
              </Link>
            </div>
            <div className="relative w-64 h-16">
              <Image
                fill
                className="object-contain"
                src="/assets/payment-methods.png"
                alt="Payment Methods"
              />
            </div>
          </div>
        </div>
      </footer>
      <div className="flex items-center justify-center w-full h-6 bg-[#f9f9f9] text-black border-t text-xs select-none">
        <span>© 2023 ESHOP LLC - All Rights Reserved</span>
      </div>
    </>
  );
}
