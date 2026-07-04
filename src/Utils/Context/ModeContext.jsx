import React, { createContext, useContext, useState, useEffect } from "react";

// إنشاء الـ Context
const ModeContext = createContext();

// Hook مخصص لاستخدام الـ Context بسهولة
export const useMode = () => useContext(ModeContext);

// Provider
export const ModeProvider = ({ children }) => {
  // الحالة الأساسية: Light Mode
  const [mode, setMode] = useState("dark");

  // عند التحميل، لو فيه تفضيل محفوظ في localStorage نستخدمه
  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode) {
      setMode(savedMode);
      document.body.setAttribute("data-theme", savedMode);
    }
  }, []);

  // دالة لتبديل الـ Mode
  const toggleMode = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    localStorage.setItem("theme", newMode);
    document.body.setAttribute("data-theme", newMode);
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};
