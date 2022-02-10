import {
  Swap,
  Swap__body,
  Swap__container,
  Swap__form,
  Swap__heading,
  Swap__section,
  Swap__switch,
  Swap__wrapper,
} from '../../styles/app/App.style';

const SwapPage = () => {
  return (
    <>
      <Swap>
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
        <Swap__wrapper>
          <Swap__heading>
            <div className="Grid__left">
              <h1>3Swap</h1>
            </div>
            <div className="Grid__right">
              <button>Connect Wallet</button>
            </div>
          </Swap__heading>
          <Swap__section>
            <Swap__switch>
              <button>Swap</button>
              <button>Liquidity</button>
            </Swap__switch>
            <Swap__body>
              <Swap__container>
                <div className="Swap__container__heading">
                  <h1>Swap</h1>
                  <p>Swap two tokens for one, pay less.</p>
                </div>
                <div className="Swap__container__form">
                  <div className="Heading">
                    <h3>From</h3>
                  </div>
                  <Swap__form>
                    <div className="Input__form">
                      <div className="Input__form__select">
                        <span className="Token__image"></span>
                        <span className="Token__name">USDT</span>
                        <span className="Token__icon"></span>
                      </div>
                      <div className="Input__form__text">
                        <input type="text" value="0.000" readOnly />
                        <span>Max</span>
                      </div>
                    </div>
                  </Swap__form>
                </div>
              </Swap__container>
            </Swap__body>
          </Swap__section>
        </Swap__wrapper>
      </Swap>
    </>
  );
};

export default SwapPage;
