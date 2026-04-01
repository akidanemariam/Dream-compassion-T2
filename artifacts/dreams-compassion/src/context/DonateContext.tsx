import { createContext, useContext, useState, ReactNode } from "react";

export type DonateMode = "one-time" | "monthly";

interface DonateContextValue {
  isOpen: boolean;
  defaultMode: DonateMode;
  openDonate: (mode?: DonateMode) => void;
  closeDonate: () => void;
}

const DonateContext = createContext<DonateContextValue | null>(null);

export function DonateProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [defaultMode, setDefaultMode] = useState<DonateMode>("one-time");

  return (
    <DonateContext.Provider
      value={{
        isOpen,
        defaultMode,
        openDonate: (mode = "one-time") => {
          setDefaultMode(mode);
          setIsOpen(true);
        },
        closeDonate: () => setIsOpen(false),
      }}
    >
      {children}
    </DonateContext.Provider>
  );
}

export function useDonate() {
  const ctx = useContext(DonateContext);
  if (!ctx) throw new Error("useDonate must be used within DonateProvider");
  return ctx;
}
