import { ethers } from 'ethers'
export const toBigNumber = number =>  ethers.BigNumber.from(number)

export const formatUnits = (number, unit = 'ether') =>  ethers.utils.formatUnits(number, unit)
export const parseUnits = (number, unit = 'ether') =>  ethers.utils.parseUnits(number, unit)

export const formatEther = number =>  ethers.utils.formatEther(number)

export const isAddress = address =>  ethers.utils.isAddress(address)
export const toChecksumAddress = address =>  ethers.utils.getAddress(address)