import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { convertNumbers } from "../utils/convert-numbers";

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
      GitHub: "my Git Hub Addres",
      Reserved: `@ ${convertNumbers(2024, "en")} All rights reserved`,
      fullName: "Mehrayin Mannani",
      title: "Full Stack Developer",
      download: "Download",
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
      GitHub: "ادرس گیت هاب من",
      fullName: "مهرآیین منانی",
      title: "توسعه‌دهنده فول استک",
      download: "دانلود",
      Reserved: `@ ${convertNumbers(2024, "fa")} کلیه حقوق محفوظ است`,
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
