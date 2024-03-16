import { fluentOption, fluentSelect, provideFluentDesignSystem } from '@fluentui/web-components';
import i18next from 'i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import { app } from './pizza/pizza';
import { settings } from './settings/settings';


provideFluentDesignSystem().register(
    fluentSelect(),
    fluentOption()
);

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
    // Define the elements once i18next is initialized
    app.define();
    settings.define();
});

export default i18next;