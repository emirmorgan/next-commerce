"use client";

import Modal from "@/components/Modal";
import { createContext, useContext, useState } from "react";

type ModalContextProvider = {
  children: React.ReactNode;
};

type IModalContext = {
  isVisible: boolean;
  openModal: (type: string) => void;
  closeModal: () => void;
};

const ModalContext = createContext({} as IModalContext);

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }: ModalContextProvider) {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("password");

  const openModal = (type: string) => {
    setVisible(true);
    setModalType(type);
  };
  const closeModal = () => setVisible(false);

  return (
    <ModalContext.Provider value={{ isVisible, openModal, closeModal }}>
      {children}
      <Modal type={modalType} />
    </ModalContext.Provider>
  );
}
