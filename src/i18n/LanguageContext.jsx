import { createContext, useContext, useState, useEffect } from "react";
import en from "./translations/enLang";
import it from "./translations/itLang";

const LanguageContext = createContext();

const translations = {
    en,
    it,
};

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("en");

    useEffect(() => {
        const savedLang = localStorage.getItem("lang");
        if (savedLang) {
            setLanguage(savedLang);
        }
    }, []);

    const changeLanguage = (lang) => {
        setLanguage(lang);
        localStorage.setItem("lang", lang);
    };

    const t = (key) => {
        const keys = key.split(".");
        let value = translations[language];

        for (let k of keys) {
            value = value?.[k];
        }

        return value || key;
    };

    return (
        <LanguageContext.Provider
            value={{ language, changeLanguage, t }}
        >
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
