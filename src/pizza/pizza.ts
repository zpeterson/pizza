import { attr, customElement, FASTElement } from "@microsoft/fast-element";

import { styles } from "./pizza.styles";
import { template } from "./pizza.template";

@customElement({
    name: "pizza-app",
    template,
    styles,
})
export class Pizza extends FASTElement {
    @attr text?: HTMLDivElement;

    @attr lang: 'en' | 'fr' | 'es' | 'ar' = 'en';

    connectedCallback() {
        super.connectedCallback();
        this.addSpans();
    }

    addSpans() {
        for (let i = 0; i < this.title.length; i++) {
            const char = this.title.charAt(i);
            const span = document.createElement("span");
            span.style.transform = `rotate(${i * this.degrees}deg)`;
            span.textContent = char;
            this.text?.appendChild(span);
        }
    }

    get degrees() {
        switch (this.lang) {
            case 'en':
                return 22;
            case 'fr':
                return 20;
            case 'es':
                return 21;
            case 'ar':
                return 24;
            default:
                return 22;
        }
    }

    get title() {
        switch (this.lang) {
            case 'en':
                return "zoë loves pizza";
            case 'fr':
                return "zoë aime la pizza";
            case 'es':
                return "zoë ama la pizza";
            case 'ar':
                return "زوي تحب البيتزا";
            default:
                return "zoë loves pizza";
        }
    }
}
