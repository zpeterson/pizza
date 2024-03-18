import { FASTElement, observable } from "@microsoft/fast-element";

import { template } from "./settings.template";
import { styles } from "./settings.styles";
import { baseLayerLuminance } from "@fluentui/web-components";

const luminanceCookie = "siteLuminance";

type Luminance = "light" | "dark";

export class Settings extends FASTElement {
    
    @observable changeLanguageCallback?: (lang: string) => void;

    @observable luminance?: Luminance;

    connectedCallback(): void {
        super.connectedCallback();
        this.setLuminance();
    }

    setLuminance() {
        this.luminance = this.luminanceCookie ?
            this.luminanceCookie as Luminance
            : (this.isBrowserDarkMode() ? "dark" : "light");
    }

    changeLuminance(luminance: string) {
        if (this.luminance !== luminance) {
            this.luminance = luminance as Luminance;
        }
    }

    luminanceChanged(oldValue: string, newValue: string) {
        console.log("luminance changed from", oldValue, "to", newValue);
        switch (newValue) {
            case oldValue:
                // do nothing if the luminance is already set
                return;
            case "light":
                this.luminanceCookie = "light";
                baseLayerLuminance.setValueFor(document.body, 1);
                break;
            case "dark":
                this.luminanceCookie = "dark";
                baseLayerLuminance.setValueFor(document.body, 0);
                break;
        }
    }

    isBrowserDarkMode(): boolean {
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches; 
    }

    set luminanceCookie(luminance: Luminance) {
        console.log("setting luminance cookie to", luminance);
        // Define the cookie expiration 30 days from now
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 30);

        // Set the cookie
        document.cookie = `${luminanceCookie}=${luminance}; expires=${expirationDate.toUTCString()}; path=/`;
    }

    get luminanceCookie(): string | undefined {
        return document.cookie
            .split('; ')
            .find(row => row.startsWith(luminanceCookie))
            ?.split('=')[1];
    }

}

export const settings = Settings.compose({
    name: "pizza-settings",
    template,
    styles
});