import i18n from "i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./en.json";
import Hn from "./Hn.json";



i18n
  .use(I18nextBrowserLanguageDetector) 
  .use(initReactI18next) 
  .init({
    resources: {
      en: { translation: en },
    //   te: { translation: te },
       hn: { translation: Hn }
    },
    fallbackLng: "en", 
    interpolation: {
      escapeValue: false 
    }
  });



export default i18n;
