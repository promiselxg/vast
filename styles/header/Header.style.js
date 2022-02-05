import styled from 'styled-components';
export const Header_wrapper = styled.header`
  width: 100%;
  background: radial-gradient(
      19.57% 100% at 6.55% 9.79%,
      rgba(0, 115, 180, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    linear-gradient(0deg, #0b131a, #060e14);
  color: #fff;
  height: 100vh;

  button {
    font-weight: 600;
  }
  @media screen and (max-width: 800px) {
    height: 100%;
  }
`;
export const Header__top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 80px;
  justify-content: space-between;

  @media screen and (max-width: 820px) {
    padding: 0px 30px;
  }
  @media screen and (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;
export const Header__logo = styled.div``;
export const Header__right = styled.div`
  display: flex;
  align-items: center;
`;
export const Nav__btn = styled.div`
  margin-left: 20px;
`;
export const Header__hero = styled.div`
  width: 100%;
  align-items: center;
  text-align: center;
  display: flex;
  color: #eee;
  height: calc(100vh - 80px);

  @media screen and (max-width: 800px) {
    height: 50vh;
    padding-bottom: 50px;
  }
  @media screen and (max-width: 414px) {
    height: 50vh;
  }
  @media screen and (max-width: 375px) {
    height: 50vh;
  }
  @media screen and (max-width: 320px) {
    height: 100%;
  }
`;
export const Hero__wrapper = styled.div`
  text-align: center;
  display: flex;
  text-align: center;
  flex-direction: column;
  width: 100%;
  @media screen and (max-width: 800px) {
    padding: 0px 20px;
  }
  h1 {
    font-size: 64px;
    max-width: 80rem;
    line-height: 5.8rem;

    @media screen and (max-width: 800px) {
      font-size: 35px;
      text-align: left;
      max-width: 100%;
      line-height: 4rem;
    }
    @media screen and (max-width: 414px) {
      font-size: 24px;
      line-height: 1.5em;
      margin-top: 40px;
    }
    @media screen and (max-width: 375px) {
      font-size: 20px;
      line-height: 1.5em;
      margin-top: 40px;
    }
    @media screen and (max-width: 320px) {
      font-size: 20px;
      line-height: 1.5em;
      margin-top: 40px;
    }
  }

  .hero__btn {
    width: 100%;
    display: flex;
    align-items: center;
    text-align: center;

    justify-content: center;
    margin-top: 50px;

    button {
      margin: 0 10px;
    }
    @media screen and (max-width: 800px) {
      text-align: left;
      justify-content: left;
      width: 100%;

      button {
        width: 100%;
      }
    }
  }
`;
