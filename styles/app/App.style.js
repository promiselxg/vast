import styled from 'styled-components';

export const Swap = styled.section`
  display: flex;
  position: relative;
  min-height: 100vh;
  /* background: #fff; */
  /* mix-blend-mode: normal; */
  .color {
    position: absolute;
    filter: blur(110px);

    &:nth-child(1) {
      width: 600px;
      height: 100vh;
      background: rgba(82, 128, 255, 1);
      right: 0;
    }
    &:nth-child(2) {
      width: 500px;
      height: 100vh;
      background: rgba(255, 96, 195, 1);
      left: 0;
      transform: rotate(-90deg);
    }
    &:nth-child(3) {
      width: 100%;
      height: 80px;
      background: rgba(255, 255, 242, 1);
      bottom: 0;
    }
    &:nth-child(4) {
      background: rgba(255, 96, 195, 1);
      width: 300px;
      height: 300px;
      transform: matrix(0.23, 0.99, -0.94, 0.29, 0, 0);
    }
  }
`;
export const Swap__wrapper = styled.div`
  width: 100%;
`;
export const Swap__heading = styled.div`
  width: 100%;
  height: 50px;
  justify-content: space-between;
  display: flex;
  align-items: center;
`;
export const Grid__left = styled.div``;
export const Grid__right = styled.div``;
export const Swap__section = styled.div`
  min-height: calc(100vh - 50px);
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 50px;
`;
export const Swap__switch = styled.div`
  margin-bottom: 30px;

  button {
    outline: none;
    border: none;
    padding: 10px;
    color: #000;
    background: #fff;
    backdrop-filter: blur(1px);
    border-radius: 10px;
  }
`;
export const Swap__body = styled.div`
  min-width: 400px;
  min-height: 400px;
  position: relative;

  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 25px 45px rgba(126, 123, 160, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);

  backdrop-filter: blur(5px);
  /* Note: backdrop-filter has minimal browser support */

  border-radius: 10px;
`;
export const Swap__container = styled.div`
  padding: 20px 20px;
  color: var(--primary-color-800);
`;
export const Swap__container__heading = styled.div``;
export const Swap__container__form = styled.div``;
export const Heading = styled.div``;
export const Swap__form = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 10px;
`;
export const Input__form = styled.div``;
export const Input__form__select = styled.div``;
export const Token__image = styled.div``;
export const Token__name = styled.div``;
export const Token__icon = styled.div``;
export const Input__form__text = styled.div``;
