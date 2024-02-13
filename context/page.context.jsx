import { createContext, useState } from "react";

export const PageContext = createContext({
  page: "",
  setPage: () => {},
});

export function PageProvider({ children }) {
  const [page, setPage] = useState("login");
  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
}
