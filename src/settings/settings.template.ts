import { html } from '@microsoft/fast-element';
import i18next from 'i18next';

import { Settings } from './settings';

export const template = html<Settings>`
  <div class="settings-container">
    <fluent-select
      title=${_ => i18next.t('luminance.selectLuminance')}
      class="select"
      current-value=${x => x.luminance}
      @change=${(x, c) => x.changeLuminance(c.event.target as HTMLSelectElement)}
    >
      <fluent-option value="light"> ${_ => i18next.t('luminance.lightMode')} </fluent-option>
      <fluent-option value="dark"> ${_ => i18next.t('luminance.darkMode')} </fluent-option>
    </fluent-select>
    <fluent-select
      title=${_ => i18next.t('language.selectLanguage')}
      class="select"
      current-value=${_ => i18next.language}
      @change=${(x, c) => x.changeLanguage(c.event.target as HTMLSelectElement)}
    >
      <fluent-option value="ar"> ${_ => i18next.t('language.arabic')} </fluent-option>
      <fluent-option value="en"> ${_ => i18next.t('language.english')} </fluent-option>
      <fluent-option value="es"> ${_ => i18next.t('language.spanish')} </fluent-option>
      <fluent-option value="fr"> ${_ => i18next.t('language.french')} </fluent-option>
      <fluent-option value="zh"> ${_ => i18next.t('language.chinese')} </fluent-option>
    </fluent-select>
  </div>
`;
