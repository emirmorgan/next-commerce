"use client";

import Modal from "@/components/Modal";
import { createContext, useContext, useState } from "react";

type ModalContextProvider = {
  children: React.ReactNode;
};

type IModalContext = {
  isVisible: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const ModalContext = createContext({} as IModalContext);

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }: ModalContextProvider) {
  const [isVisible, setVisible] = useState<boolean>(false);

  const openModal = () => setVisible(true);
  const closeModal = () => setVisible(false);

  return (
    <ModalContext.Provider value={{ isVisible, openModal, closeModal }}>
      {children}
      <Modal />
    </ModalContext.Provider>
  );
}
