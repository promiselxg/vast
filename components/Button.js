import styled from 'styled-components';
const StyledButton = styled.button`
  background: ${({ bgColor }) => bgColor || ''};
  color: ${({ textColor }) => textColor || 'var(--bg-one)'};
  border: none;
  padding: 15px 20px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  font-size: 14px;
  line-height: 18px;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  text-align: center;
  font-weight: 500;
  transition: all 300ms ease-out;
  .icon {
    font-size: 20px;
    padding-right: 5px;
  }

  &:hover {
    transition: all 300ms ease-out;
    background: ${({ hoverBg }) => hoverBg || ''};
    color: ${({ hoverColor }) => hoverColor || 'var(--bg-one)'};
  }
`;
const Button = ({ icon, label, ...children }) => {
  return (
    <>
      <StyledButton {...children}>
        <span>{icon}</span>
        <span>{label}</span>
      </StyledButton>
    </>
  );
};

export default Button;
