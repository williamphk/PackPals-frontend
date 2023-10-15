import React, { createContext, useState, useContext, ReactNode } from "react";

export type Page =
  | "dashboard"
  | "recent-matches"
  | "ongoing-matches"
  | "you-might-like";

interface PageContextProps {
  page: Page;
  setPage: (page: Page) => void;
}

const PageContext = createContext<PageContextProps | undefined>(undefined);

export const usePage = (): PageContextProps => {
  const context = useContext(PageContext);
  if (!context) {
    throw new Error("usePage must be used within a PageProvider");
  }
  return context;
};

interface PageProviderProps {
  children: ReactNode;
}

export const PageProvider: React.FC<PageProviderProps> = ({ children }) => {
  const [page, setPage] = useState<Page>("dashboard");
  window.scrollTo(0, 0);

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};
