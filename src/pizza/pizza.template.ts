import { html, ref } from '@microsoft/fast-element';
import { classNames } from '@microsoft/fast-web-utilities';

import { Pizza } from './pizza.js';
import '../settings/settings.js';

export const template = html<Pizza>`
  <pizza-settings></pizza-settings>
  <div class="pizza-container">
    <div
      class="circle"
      @click=${x => x.animationClick()}
      role="button"
      aria-description="Container for pizza icon and animated text that reads 'Zoë loves pizza'"
      aria-label=${x => (x.animated ? 'Click to stop the animated text' : 'Click to animate text')}
      tabindex="0"
    >
      <div class="pizza"></div>
      <div ${ref('text')} class=${x => classNames('text', ['animate', x.animated])}></div>
    </div>
  </div>
`;
