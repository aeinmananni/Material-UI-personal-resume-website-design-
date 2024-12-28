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
      Name: "Name",
      Birth: "Birth",
      FreeLancer: "FreeLancer",
      Email: "EMAIL",
      phone: "phone",
      aboutMe: "about me",
      Job: "Job",
      fullStackDeveloper: "Fullstack-developer",
      dateFullStak: `${convertNumbers(2020, "en")}`,
      descriptionFullStack: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta repellendus saepe natus hic esse et accusantium delectus. Accusantium nemo consequuntur unde provident deserunt vero ut ab dolorum, repellendus ipsa id!`,
      phoneNumber: `+${convertNumbers(98, "en")} ${convertNumbers(
        9901656003,
        "en"
      )}`,
      BirthdayValue: `${convertNumbers(24, "en")} September ${convertNumbers(
        1997,
        "en"
      )}`,
      description: `My name is Mehrain Manani. I'm so happy that you're taking the time to visit my page. Creativity in any work adds beauty to everything, and I've tried to be as creative as I can. I'm a passionate and crazy lover of programming, striving to create the best for myself and others.`,
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
      aboutMe: "درباره من",
      Name: "نام",
      Birth: "تولد",
      Job: "شغل",
      FreeLancer: "فریلنسر",
      Email: "ایمیل",
      phone: "تلفن",
      dateFullStak: `${convertNumbers(2020, "fa")}`,
      fullStackDeveloper: "برنامه نویس فول استک",
      descriptionFullStack: `اگر شما یک طراح هستین و یا با طراحی های گرافیکی سروکار دارید به متن های برخورده اید که با نام لورم ایپسوم شناخته می‌شوند. لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) متنی ساختگی و بدون معنی است که برای امتحان فونت و یا پر کردن فضا در یک طراحی گرافیکی و یا صنعت چاپ استفاده میشود. طراحان وب و گرافیک از این متن برای پرکردن صفحه و ارائه شکل کلی طرح استفاده می‌کنند.`,
      phoneNumber: `${convertNumbers(9901656003, "fa")} +${convertNumbers(
        98,
        "fa"
      )}`,
      BirthdayValue: `${convertNumbers(2, "fa")} مهر ${convertNumbers(
        1376,
        "fa"
      )}`,
      Reserved: `@ ${convertNumbers(2024, "fa")} کلیه حقوق محفوظ است`,
      language: "زبان",
      description: `اسم من مهراِیین منانی هست. خیلی خوشحالم که وقت می‌گذارید و از صفحه من دیدن می‌کنید. خلاقیت در هر کاری به همه چیز زیبایی می‌بخشه و من سعی کردم تا جایی که می‌توانم خلاق باشم. من یک عاشق دیوانه برنامه‌نویسی هستم و تلاش می‌کنم بهترین‌ها را برای خودم و دیگران خلق کنم.





`,
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
