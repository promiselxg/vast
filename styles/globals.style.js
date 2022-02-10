import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root{
  --blue-bg:#0078D4;
  --default-bg:#212121;
  --primary-bg:#B3D6FC;
  --secondary-bg:#2488d8;
  --light-bg:#106ebe;
  --text-color:#eee;
  --input-bg:#fcfcfc;
  --primary-color-500:#9978c5;
  --primary-color-600:#350870;
  --primary-color-700:#5d20ad;
  --primary-color-800:#4500a0;
  --secondary-color-500:rgba(154,153,156,1);
  --secondary-color-600:rgba(177,177,177,1);
}
html,body{
  background-color:whitesmoke;
  color:#212121;
  font-family: 'Poppins', sans-serif;
  scroll-behavior: smooth;
  font-size:14px;
  -ms-overflow-style: none;
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
}
a{text-decoration:none }

`;
export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
  }
`;
export default GlobalStyle;
