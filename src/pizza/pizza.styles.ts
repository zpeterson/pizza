import { css } from '@microsoft/fast-element';

const settingsHeight = '72px';

const animation = css`
.animate {
    animation: rotateText 10s linear infinite;
}

@keyframes rotateText {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg)
  }
}
`;

export const styles = css`

.pizza-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - ${settingsHeight});
}

.circle {
  position: relative;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  position: absolute;
  width: 350px;
  height: 350px;
  background: url(assets/fluent_food_pizza_24_regular.svg);
  background-size: cover;
  border-radius: 50%;
}

.text {
  position: absolute;
  width: 100%;
  height: 100%;
}


.text span {
  position: absolute;
  left: 50%;
  font-size: 20px;
  transform-origin: 0 200px;
}

${animation}
`;