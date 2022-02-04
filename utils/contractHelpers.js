import { ethers } from 'ethers'

// Addresses
import {
  getTokenAddress,
} from './addressHelpers'

// ABI
import token from '../contract/token.json'

const getContract = (abi, address, signerOrProvider) => {
  let contract = new ethers.Contract(address, abi, signerOrProvider)
  return contract
}

export const getTokenContract = (signerOrProvider) => {
  return getContract(token.abi, getTokenAddress(), signerOrProvider)
}