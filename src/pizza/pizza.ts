import { attr, FASTElement } from "@microsoft/fast-element";

import { styles } from "./pizza.styles";
import { template } from "./pizza.template";
import i18next from '../index';

export class Pizza extends FASTElement {
    @attr text?: HTMLDivElement;

    @attr lang: string = i18next.language;

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

    get degrees() {
        switch (this.lang) {
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