import { createContext, useContext, useState } from "react";

const ActiveCVContext = createContext();

export function ActiveCVProvider({ children }) {
  const [activeCV, setActiveCV] = useState(() => {
    const saved = localStorage.getItem("active_cv");
    return saved ? JSON.parse(saved) : null;
  });

  const selectCV = (cv) => {
    setActiveCV(cv);
    localStorage.setItem("active_cv", JSON.stringify(cv));
  };

  return (
    <ActiveCVContext.Provider value={{ activeCV, selectCV }}>
      {children}
    </ActiveCVContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useActiveCV = () => useContext(ActiveCVContext);
