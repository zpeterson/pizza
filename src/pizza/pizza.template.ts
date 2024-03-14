import { html, ref } from "@microsoft/fast-element";
import { Pizza } from "./pizza";

export const template = html<Pizza>`
<div class="pizza-container">
    <div class="circle">
        <div class="logo"></div>
        <div class="text" ${ref('text')}></div>
    </div>
</div
`;