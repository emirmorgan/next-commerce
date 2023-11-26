"use client";

import { SetStateAction, createContext, useContext, useState } from "react";

type ScrollableContextProvider = {
  children: React.ReactNode;
};

type IScrollableContext = {
  isDragging: boolean;
  setDragging: React.Dispatch<SetStateAction<boolean>>;
};

const ScrollableContext = createContext({} as IScrollableContext);

export function useScrollable() {
  return useContext(ScrollableContext);
}

export function ScrollableProvider({ children }: ScrollableContextProvider) {
  const [isDragging, setDragging] = useState<boolean>(false);

  return (
    <ScrollableContext.Provider value={{ isDragging, setDragging }}>
      {children}
    </ScrollableContext.Provider>
  );
}
