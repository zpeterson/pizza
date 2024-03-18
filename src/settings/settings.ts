import { FASTElement, observable } from '@microsoft/fast-element';
import { baseLayerLuminance } from '@fluentui/web-components';
import i18next from 'i18next';

import { template } from './settings.template';
import { styles } from './settings.styles';

const luminanceCookie = 'siteLuminance';

type Luminance = 'light' | 'dark';

export class Settings extends FASTElement {
  @observable luminance?: Luminance;

  connectedCallback(): void {
    super.connectedCallback();
    this.initializeLuminance();
  }

  initializeLuminance() {
    this.luminance = this.luminanceCookie
      ? (this.luminanceCookie as Luminance)
      : this.isBrowserDarkMode()
        ? 'dark'
        : 'light';
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
        this.luminanceCookie = 'light';
        baseLayerLuminance.setValueFor(document.body, 1);
        break;
      case 'dark':
        this.luminanceCookie = 'dark';
        baseLayerLuminance.setValueFor(document.body, 0);
        break;
    }
  }

  isBrowserDarkMode(): boolean {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  set luminanceCookie(luminance: Luminance) {
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
