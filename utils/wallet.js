// Set of helper functions to facilitate wallet setup

import { nodes } from './getRpcUrl'

/**
 * Prompt the user to add BSC as a network on Metamask, or switch to BSC if the wallet is on a different network
 * @returns {boolean} true if the setup succeeded, false otherwise
 */
export const setupNetwork = async (provider) => {
  if (provider) {
    const chainId = parseInt(process.env.NEXT_PUBLIC_REACT_APP_CHAIN_ID, 10)
    const testnet = chainId === 97
    
    try {
        await provider.request({
          method: 'wallet_addEthereumChain',
          params: [
            {
              chainId: `0x${chainId.toString(16)}`,
              chainName: `Binance Smart Chain ${ testnet ? "Testnet" : "Mainnet"}`,
              nativeCurrency: {
                name: 'BNB',
                symbol: 'BNB',
                decimals: 18,
              },
              rpcUrls: nodes,
              blockExplorerUrls: [testnet ? 'https://testnet.bscscan.com/' : "https://bscscan.com/"],
            },
          ],
        })
      return true
    } catch (error) {
      return false
    }
  } else {
    alert("Can't setup the BSC network on metamask because provider is undefined")
    return false
  }
}

/**
 * Prompt the user to add a custom token to metamask
 * @param tokenAddress
 * @param tokenSymbol
 * @param tokenDecimals
 * @param tokenImage
 * @returns {boolean} true if the token has been added, false otherwise
 */
export const registerToken = async (
  provider,
  tokenAddress,
  tokenSymbol,
  tokenDecimals,
  tokenImage,
) => {
  const tokenAdded = await provider.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20',
      options: {
        address: tokenAddress,
        symbol: tokenSymbol,
        decimals: tokenDecimals,
        image: tokenImage,
      },
    },
  })

  return tokenAdded
}