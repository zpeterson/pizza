import { css } from '@microsoft/fast-element';

export const styles = css`

.pizza-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.circle {
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  position: absolute;
  width: 150px;
  height: 150px;
  background: url(assets/fluent_food_pizza_24_regular.svg);
  background-size: cover;
  border-radius: 50%;
}

.text {
  position: absolute;
  width: 100%;
  height: 100%;
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

.text span {
  position: absolute;
  left: 50%;
  font-size: 20px;
  transform-origin: 0 100px;
}

`;