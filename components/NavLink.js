import Link from 'next/link';
import styled from 'styled-components';
const StyledLink = styled.a`
  display: flex;
  span {
    margin: 0 8px;
    display: flex;
    align-items: center;
  }
`;
const NavLink = ({ to, label, icon, ...children }) => {
  return (
    <>
      <Link href={to} passHref>
        <StyledLink {...children}>
          {icon && <span>{icon}</span>}
          {label && <span>{label}</span>}
        </StyledLink>
      </Link>
    </>
  );
};

export default NavLink;
