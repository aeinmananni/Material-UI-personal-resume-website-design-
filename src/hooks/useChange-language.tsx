import { useTranslation } from "react-i18next";
export const useChangeLanguage = () => {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: "en" | "fa") => {
    i18n.changeLanguage(lng);
    document.documentElement.setAttribute("dir", lng === "fa" ? "rtl" : "ltr");
  };
  return { t, changeLanguage };
};
