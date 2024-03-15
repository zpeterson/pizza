import i18next from 'i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import { app } from './pizza/pizza';

i18next
.use(HttpBackend)
.use(LanguageDetector)
.init({
    backend: {
        loadPath: '/locales/{{lng}}.json'
    },
    fallbackLng: 'en',
    debug: true,
}).then(() => {
    // Define the pizza custom element once i18next is initialized
    app.define();
});

export default i18next;