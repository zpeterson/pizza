import { FASTElement, observable } from '@microsoft/fast-element';
import { baseLayerLuminance } from '@fluentui/web-components';
import i18next from 'i18next';

import { template } from './settings.template';
import { styles } from './settings.styles';

type Luminance = 'light' | 'dark';

export class Settings extends FASTElement {
  @observable luminance?: Luminance;

  connectedCallback(): void {
    super.connectedCallback();
    this.initializeLuminance();
  }

  initializeLuminance() {
    const luminanceCookie = this.getLuminanceValue();
    this.luminance = luminanceCookie ? (luminanceCookie as Luminance) : this.isBrowserDarkMode() ? 'dark' : 'light';
  }

  changeLuminance(e: HTMLSelectElement) {
    const luminance = e.value;
    // Do nothing if the luminance is already set or if the luminance is not supported
    if (this.luminance === luminance || !['light', 'dark'].includes(luminance)) {
      return;
    }
    this.luminance = luminance as Luminance;
  }

  luminanceChanged(oldValue: string, newValue: string) {
    switch (newValue) {
      case oldValue:
        // Do nothing if the luminance is already set
        return;
      case 'light':
        this.luminanceValue = 'light';
        baseLayerLuminance.setValueFor(document.body, 1);
        break;
      case 'dark':
        this.luminanceValue = 'dark';
        baseLayerLuminance.setValueFor(document.body, 0);
        break;
    }
  }

  isBrowserDarkMode(): boolean {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  set luminanceValue(luminance: Luminance) {
    localStorage.setItem('luminanceValue', luminance);
  }

  getLuminanceValue(): string | null {
    return localStorage.getItem('luminanceValue');
  }

  changeLanguage(e: HTMLSelectElement) {
    const lang = e.value;
    // Do nothing if the language is already set or if the language is not supported
    if (lang === i18next.language || !['ar', 'en', 'es', 'fr', 'zh'].includes(lang)) {
      return;
    }
    i18next.changeLanguage(lang);
    // Reload page to pull in fresh strings and lang settings
    location.reload();
  }
}

export const settings = Settings.compose({
  name: 'pizza-settings',
  template,
  styles
});
