import token from '../contract/token.json'

export const getTokenAddress = () => {
  const mainNetChainId = 56;
  const chainId = process.env.NEXT_PUBLIC_REACT_APP_CHAIN_ID;
  return token[chainId] ? token[chainId].address : token[mainNetChainId] ? token[mainNetChainId].address : null;
}

export const formatAddress = (address) => {
  const first7 = address.substring(0, 7)
  const last7 = address.substring(33)

  return `${first7}...${last7}`
}