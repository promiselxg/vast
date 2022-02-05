import Head from 'next/head';
import Header from '../components/header/Header';
import About from '../components/section/About';

import { useEffect } from 'react';
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import { useDispatch } from 'react-redux';
import {
  updateWeb3Modal,
  updateFetching,
  updateAddress,
  updateEthers,
  updateProvider,
  updateConnected,
  updateChainId,
  updateSigner,
} from '../state/actions';
import { useConnected, useEthers, useWeb3Modal } from '../state/hooks';
import { setupNetwork } from '../utils/wallet';
import WalletConnectProvider from '@walletconnect/web3-provider';

const Home = () => {
  const web3Modal = useWeb3Modal();
  const provider = useEthers();
  const dispatch = useDispatch();
  const isConnected = useConnected();

  useEffect(() => {
    init();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (web3Modal) {
      if (web3Modal.cachedProvider) {
        connect();
      }
    }
    // eslint-disable-next-line
  }, [web3Modal]);

  const getChainId = async (provider) => {
    const chainId = await provider.request({ method: 'eth_chainId' });
    return +chainId;
  };

  const connect = async () => {
    const default_chain = process.env.NEXT_PUBLIC_REACT_APP_CHAIN_ID;

    if (!web3Modal) {
      return false;
    }
    const provider = await web3Modal.connect();
    if (web3Modal.cachedProvider === 'walletconnect') {
      const chainId = await getChainId(provider);
      if (+chainId !== +default_chain) {
        web3Modal.clearCachedProvider();
        alert('Disconnect Wallet Connect and switch to Smart Chain network.');
        return false;
      }
    } else {
      const chainId = await getChainId(provider);
      if (+chainId !== +default_chain) {
        setupNetwork(provider);
      }
    }
    await subscribeProvider(provider);

    const ether = new ethers.providers.Web3Provider(provider);
    const signer = await ether.getSigner();
    const address = await signer.getAddress();

    const chainId = await getChainId(ether.provider);

    dispatch(updateEthers(ether));
    dispatch(updateProvider(ether));
    dispatch(updateAddress(address));
    dispatch(updateConnected(true));
    dispatch(updateChainId(chainId));
    dispatch(updateSigner(signer));
    dispatch(updateFetching(false));
  };

  const resetApp = async () => {
    await web3Modal.clearCachedProvider();
    if (provider) {
      dispatch(updateConnected(false));
      dispatch(updateWeb3Modal(null));
      dispatch(updateEthers(null));
      dispatch(updateProvider(null));
      dispatch(updateAddress(''));
      dispatch(updateSigner(null));
      dispatch(updateChainId(null));
    }
  };

  const subscribeProvider = async (provider) => {
    if (!provider.on) {
      return;
    }
    provider.on('accountsChanged', async (accounts) => {
      if (accounts.length === 0) {
        close();
      } else {
        dispatch(updateAddress(accounts[0]));
        dispatch(updateConnected(true));
      }
    });
    provider.on('chainChanged', async (chainId) => {
      window.location.reload();
      dispatch(updateChainId(chainId));
    });
    provider.on('disconnect', () => resetApp());
  };

  const init = () => {
    const newWeb3Modal = new Web3Modal({
      cacheProvider: true,
      providerOptions: {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            rpc: {
              56: 'https://bsc-dataseed.binance.org',
              97: 'https://data-seed-prebsc-1-s1.binance.org:8545',
            },
          },
        },
      },
    });
    dispatch(updateWeb3Modal(newWeb3Modal));
  };

  const pop = async () => {
    if (web3Modal.cachedProvider) {
      connect();
    } else {
      await web3Modal._toggleModal();
    }
  };

  const close = async () => {
    await web3Modal.clearCachedProvider();
    if (provider) {
      dispatch(updateEthers(null));
      dispatch(updateProvider(null));
      dispatch(updateAddress(''));
      dispatch(updateConnected(false));
      dispatch(updateSigner(null));
      dispatch(updateChainId(null));
    }
  };

  return (
    <>
      <Head>
        <title>VAST</title>
      </Head>
      <Header pop={pop} close={close} isConnected={isConnected} />
      <About />
    </>
  );
};

export default Home;
