// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTrans from "../../public/assets/translations/en.json";
import ruTrans from "../../public/assets/translations/ru.json";
import uzTrans from "../../public/assets/translations/uz.json";
import trTrans from "../../public/assets/translations/tr.json";

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: enTrans
            },
            ru: {
                translation: ruTrans
            },
            uz: {
                translation: uzTrans
            },
            tr: {
                translation: trTrans
            }
        },
        lng: "uz",
        fallbackLng: "uz",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
