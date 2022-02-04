import styled from 'styled-components';

export const About__wrapper = styled.section`
  width: 100%;
  min-height: 100vh;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 820px) {
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

export const About__container = styled.div`
  display: flex;
  align-items: center;
  height: 100vh;

  &:after {
    content: '';
    position: absolute;
    width: 400px;
    height: 400px;
    right: 0;
    background: linear-gradient(#2196f3, #e91e63);
    transform: translate(-120px, 20px);
    border-radius: 50%;

    @media screen and (min-width: 1400px) {
      transform: translate(-240px, 20px);
    }

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  @media screen and (max-width: 820px) {
    flex-direction: column;
    padding: 40px 30px;
    height: 100%;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
  }
`;
export const About__left = styled.div`
  flex: 0.6;
  z-index: 5;
  h1 {
    font-size: 50px;
  }
  p {
    font-size: 16px;
    max-width: 48rem;
    line-height: 30px;
  }
  .About__Icons {
    margin-top: 20px;
    display: flex;

    a {
      font-size: 30px !important;
      color: #0078d4;
      transition: all 300ms ease-out;
      margin: 0px 5px;
      &:hover {
        color: #212121;
        transition: all 300ms ease-out;
      }
    }
    @media screen and (max-width: 820px) {
      display: none;
    }
    @media screen and (max-width: 768px) {
      margin-top: 20px;
      margin-bottom: 30px;
    }
  }
`;
export const About__right = styled.div`
  flex: 0.4;
  @media screen and (max-width: 820px) {
    display: flex;
    margin-top: 40px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
  }
`;
export const About__content = styled.div`
  display: flex;
  width: 100%;

  flex-direction: column;
  position: relative;
  .desc {
    width: 230px;
    background: rgba(255, 255, 255, 0.1);
    padding: 20px;
    border-radius: 10px;
    z-index: 5;
    box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(25px);
    h1 {
      color: var(--blue-bg);
    }
    &:nth-child(1) {
      margin-bottom: 20px;
    }
    &:nth-child(1),
    &:nth-child(2) {
      display: flex;
      flex-direction: column;

      h1 {
        margin-bottom: 10px;
      }
    }

    &:nth-child(3) {
      position: absolute;
      right: 0;
      top: 25%;
      margin-left: 60px;
      h1 {
        margin-bottom: 10px;
      }
      @media screen and (max-width: 820px) {
        position: relative;
        top: 0;
        margin-left: 0px;
      }
      @media screen and (max-width: 768px) {
        position: relative;
        top: 0;
        margin-left: 0px;
      }
    }

    p {
      margin-bottom: 10px;
      @media screen and (max-width: 768px) {
        font-size: 16px;
        line-height: 2em;
      }
    }
    @media screen and (max-width: 820px) {
      width: 100%;
      margin-bottom: 20px;
    }
    @media screen and (max-width: 768px) {
      width: 100%;
      margin-bottom: 20px;
    }
  }
`;
