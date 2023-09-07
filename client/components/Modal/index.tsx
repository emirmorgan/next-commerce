"use client";

import { useRef, useEffect, MutableRefObject } from "react";

import { useModal } from "@/context/ModalContext";
import useClickOutside from "@/hooks/useClickOutside";

export default function Modal() {
  const elRef = useRef() as MutableRefObject<HTMLDivElement>;

  const { isVisible, closeModal } = useModal();

  const handleClickOutside = () => {
    closeModal();
  };

  useClickOutside(elRef, handleClickOutside);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isVisible]);

  return (
    <div
      className={
        "fixed top-0 z-[100] bg-black/10 w-full min-h-screen" +
        (isVisible ? " flex justify-center items-center" : " hidden")
      }
    >
      <div ref={elRef} className="border-2 bg-white rounded-md p-3">
        <span>children</span>
      </div>
    </div>
  );
}