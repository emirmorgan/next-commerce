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
  productId: number;
  openModal: (type: string) => void;
  closeModal: () => void;
  setAddressType: Dispatch<SetStateAction<string>>;
  setProductId: Dispatch<SetStateAction<number>>;
};

const ModalContext = createContext({} as IModalContext);

export function useModal() {
  return useContext(ModalContext);
}

export function ModalProvider({ children }: ModalContextProvider) {
  const [isVisible, setVisible] = useState<boolean>(false);

  const [modalType, setModalType] = useState<string>("password");

  // Modal props
  const [addressType, setAddressType] = useState<string>("add"); // AddressModal
  const [productId, setProductId] = useState<number>(0); // ProductModal

  const openModal = (type: string) => {
    setVisible(true);
    setModalType(type);
  };

  const closeModal = () => setVisible(false);

  return (
    <ModalContext.Provider
      value={{
        isVisible,
        addressType,
        productId,
        openModal,
        closeModal,
        setAddressType,
        setProductId,
      }}
    >
      {children}
      <Modal type={modalType} />
    </ModalContext.Provider>
  );
}
