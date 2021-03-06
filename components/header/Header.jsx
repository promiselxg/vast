import { Container } from '../../styles/globals.style';
import {
  Header_wrapper,
  Header__hero,
  Header__logo,
  Header__right,
  Header__top,
  Hero__wrapper,
  Nav__btn,
} from '../../styles/header/Header.style';
import Button from '../Button';
import useTokenContract from '../../hooks/useTokenContract';
import { useAddress, useSigner } from '../../state/hooks';
import { parseUnits } from 'ethers/lib/utils';
import Image from 'next/image';
const Header = ({ pop, close, isConnected }) => {
  const { claim, refer } = useTokenContract();

  // const registerAsRef = async () => {
  //   await refer();
  // };
  const airdrop = async () => {
    await claim();
  };
  return (
    <>
      <Header_wrapper>
        <Container>
          <Header__top>
            <Header__logo>
              <Image src="/vast.webp" alt="vast" width={100} height={25} />
            </Header__logo>
            <Header__right>
              {/* <nav>
                <NavLink to="/" label="About" />
              </nav> */}
              <Nav__btn>
                {isConnected ? (
                  <Button
                    label="Disconnect wallet"
                    hoverBg="#051937"
                    bgColor="#0078D4"
                    hoverColor="#0078D4"
                    onClick={close}
                  />
                ) : (
                  <Button
                    label="Connect wallet"
                    hoverBg="#051937"
                    bgColor="#0078D4"
                    hoverColor="#0078D4"
                    onClick={pop}
                  />
                )}
              </Nav__btn>
            </Header__right>
          </Header__top>
          <Header__hero>
            <Hero__wrapper>
              <h1>
                We are currently giving out $10,000,000 worth of $VAST as
                airdrop to prospect users.
              </h1>
              <div className="hero__btn">
                {isConnected && (
                  <Button
                    label="claim Airdrop"
                    hoverBg="#051937"
                    bgColor="#0078D4"
                    hoverColor="#0078D4"
                    onClick={airdrop}
                  />
                )}
              </div>
            </Hero__wrapper>
          </Header__hero>
        </Container>
      </Header_wrapper>
    </>
  );
};

export default Header;
