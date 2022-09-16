import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
	en: {
		translation: require("./en.json"),
	},
	ka: {
		translation: require("./ka.json"),
	},
};

i18n.use(initReactI18next).init({
	resources,
	lng: "en", // if you're using a language detector, do not define the lng option
	fallbackLng: "en",

	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
