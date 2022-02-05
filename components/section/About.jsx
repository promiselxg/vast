import { Container } from '../../styles/globals.style';
import {
  About__container,
  About__content,
  About__left,
  About__right,
  About__wrapper,
} from '../../styles/section/About.style';
// import NavLink from '../NavLink';
// import {
//   FiFacebook,
//   FiTwitter,
//   FiLinkedin,
//   FiInstagram,
//   FiMail,
// } from 'react-icons/fi';

const About = () => {
  return (
    <>
      <About__wrapper>
        <Container>
          <About__container>
            <About__left>
              <h1>About Us</h1>
              <p>
                VAST can only grow and accomplish its mission with YOUR help. We
                believe in the power of our community. Spread the word on social
                media platforms, answer questions, help people, tell your
                friends. Or, if you have specialized skills, contact us: smart
                contract development, web development, multimedia/marketing etc.
                We also welcome help in moderating our communities.
              </p>
              <div className="About__Icons">
                {/* <NavLink to="/" icon={<FiFacebook />} />
                <NavLink to="/" icon={<FiTwitter />} />
                <NavLink to="/" icon={<FiLinkedin />} />
                <NavLink to="/" icon={<FiInstagram />} />
                <NavLink to="/" icon={<FiMail />} /> */}
                <h1>Tokenomics</h1>
                <div className="info">
                  <span>Token Name : </span>
                  <span>Vast</span>
                </div>
                <div className="info">
                  <span>Token Symbol : </span>
                  <span>Vast</span>
                </div>
                <div className="info">
                  <span>Token decimal : </span>
                  <span>18</span>
                </div>
                <div className="info">
                  <span>Contract Address : </span>
                  <span>0x6F2fEBE1249AD8Ef1fF52E891D784910597543e6</span>
                </div>
                <div className="info">
                  <span>Total Supply : </span>
                  <span>210,000,000,000 VAST</span>
                </div>
              </div>
            </About__left>
            <About__right>
              <About__content>
                <div className="desc">
                  <h1>Redistribution</h1>
                  <p>
                    To reward holders of the token we redistribute 4% of every
                    transaction to all holders of the token
                  </p>
                </div>
                <div className="desc">
                  <h1>Rewards Holding</h1>
                  <p>
                    4% of each transaction is redistributed to token holders.
                    That means you earn more Vast by just holding them in your
                    wallet.
                  </p>
                </div>
                <div className="desc">
                  <h1>Locked Liquidty</h1>
                  <p>
                    Unruggable, majority of LP tokens locked &amp; some burned
                    so theres always LP.
                  </p>
                </div>
              </About__content>
            </About__right>
          </About__container>
        </Container>
      </About__wrapper>
    </>
  );
};

export default About;
