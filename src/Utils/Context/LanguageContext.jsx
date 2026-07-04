import React, { createContext, useContext, useState, useEffect } from "react";

// إنشاء الـ Context
const LanguageContext = createContext();

// Hook مخصص عشان تسهّل استخدامه
export const useLanguage = () => useContext(LanguageContext);

// Provider
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // الوضع الافتراضي: English

  // عند تحميل الصفحة، نجيب اللغة من localStorage لو متخزنة
  useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  // دالة لتغيير اللغة
  const toggleLanguage = () => {
    const newLang = language === "en" ? "ar" : "en";
    setLanguage(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
