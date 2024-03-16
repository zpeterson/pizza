import { FASTElement, observable } from "@microsoft/fast-element";

import { template } from "./settings.template";
import { styles } from "./settings.styles";

export class Settings extends FASTElement {
    
    @observable changeLanguageCallback?: (lang: string) => void;

}

export const settings = Settings.compose({
    name: "pizza-settings",
    template,
    styles
});