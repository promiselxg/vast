import { useSelector } from 'react-redux'

export const useWeb3Modal = () => {
  return useSelector((state) => state.app.web3Modal)
}

export const useFetching = () => {
  return useSelector((state) => state.app.fetching)
}

export const useAddress = () => {
  return useSelector((state) => state.app.address)
}

export const useSigner = () => {
  return useSelector((state) => state.app.signer)
}

export const useEthers = () => {
  return useSelector((state) => state.app.ether)
}

export const useProvider = () => {
  return useSelector((state) => state.app.provider)
}

export const useConnected = () => {
  return useSelector((state) => state.app.connected)
}

export const useChainID = () => {
  return useSelector((state) => state.app.chainId)
}