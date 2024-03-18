import { html, ref } from "@microsoft/fast-element";
import { classNames } from '@microsoft/fast-web-utilities';

import { Pizza } from "./pizza.js";
import  "../settings/settings.js";

export const template = html<Pizza>`
<pizza-settings></pizza-settings>
<div class="pizza-container">
    <div class="circle">
        <div class="logo"></div>
        <div
            ${ref('text')}
            class=${x => classNames('text', ['animate', x.animated])}
            @click=${x => x.animationClick()}
        ></div>
    </div>
</div>
`;