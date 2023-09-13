"use client";

import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

import Modal from "@/components/Modal";

type ModalContextProvider = {
  children: React.ReactNode;
};

type IModalContext = {
  isVisible: boolean;
  addressType: string;
  openModal: (type: string) => void;
  closeModal: () => void;
  setAddressType: Dispatch<SetStateAction<string>>;
};

const ModalContext = createContext({} as IModalContext);

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }: ModalContextProvider) {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [modalType, setModalType] = useState<string>("password");
  const [addressType, setAddressType] = useState<string>("add");

  const openModal = (type: string) => {
    setVisible(true);
    setModalType(type);
  };

  const closeModal = () => setVisible(false);

  return (
    <ModalContext.Provider
      value={{ isVisible, addressType, openModal, closeModal, setAddressType }}
    >
      {children}
      <Modal type={modalType} />
    </ModalContext.Provider>
  );
}
