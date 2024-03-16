import { attr, FASTElement } from "@microsoft/fast-element";
import i18next from "i18next";

import { styles } from "./pizza.styles";
import { template } from "./pizza.template";

export class Pizza extends FASTElement {
    @attr text?: HTMLDivElement;

    @attr animated = true;

    connectedCallback() {
        super.connectedCallback();
        this.addSpans();
    }

    addSpans() {
        const title = i18next.t('zoeLovesPizza');
        for (let i = 0; i < title.length; i++) {
            const char = title.charAt(i);
            const span = document.createElement("span");
            span.style.transform = `rotate(${i * this.degrees}deg)`;
            span.textContent = char;
            this.text?.appendChild(span);
        }
    }

    animationClick() {
        this.animated = !this.animated;
    }

    changeLanguage(lang: string) {
        // Do nothing if the language is already set
        if (lang === i18next.language) {
            return;
        }
        i18next.changeLanguage(lang);
        // Reload page to pull in fresh strings
        location.reload();
    }

    get degrees() {
        switch (i18next.language) {
            case 'ar':
                return 24;
            case 'en':
                return 22;
            case 'es':
                return 21;
            case 'fr':
                return 20;
            case 'zh':
                return 50;
            default:
                return 22;
        }
    }
}

export const app = Pizza.compose({
    name: "pizza-app",
    template,
    styles
});