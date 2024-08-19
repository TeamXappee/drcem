"use client";
import { NextIntlClientProvider, useMessages } from "next-intl";
import React, { createContext, useContext } from "react";

// Step 1: Create a Locale Context
const LocaleContext: any = createContext(null);

// Step 2: Define the LocaleProvider component
export const LocaleProvider = ({
  children,
  locale,
}: {
  children: React.ReactNode;
  locale: string;
}) => {
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
};

// Step 3: Create a custom hook to use the Locale Context
export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (context === null) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return context;
};
