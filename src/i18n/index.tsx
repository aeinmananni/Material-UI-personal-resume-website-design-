import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to our site",
      profile: "profile",
      Resume: "Resume",
      SkilsAndServices: "Skils and Services",
      Portfolio: "Portfolio",
      Contact: "Contact",
      HIREME: "HIRE ME",
      language: "Language",
    },
  },
  fa: {
    translation: {
      welcome: "به سایت ما خوش آمدید",
      profile: "نمایه",
      Resume: "رزومه",
      SkilsAndServices: "مهارت‌ها و خدمات",
      Portfolio: "نمونه کارها",
      Contact: "تماس بگیرید",
      HIREME: "من رااستخدام کن",
      language: "زبان",
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    debug: true,
  });

export default i18n;
