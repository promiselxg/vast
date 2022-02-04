import { useEffect, useState } from 'react'
import {
  getTokenContract,
} from "../utils/contractHelpers";
import useRefresh from './useRefresh'
import { useAddress, useEthers, useProvider } from '../state/hooks'

export const useNativeBalance = () => {
  const [balance, setBalance] = useState("0")
  const account = useAddress()
  const provider = useEthers()
  const { fastRefresh } = useRefresh()

  useEffect(() => {
    const fetchBalance = async () => {
      if(provider && account) {
        let price = await provider.getBalance(account)
        setBalance(price.toString());
      }else{
        setBalance("0");
      }
    }

    fetchBalance()

  }, [account, fastRefresh, provider])

  return balance
}

export const useTokenBalance = () => {
  const [balance, setBalance] = useState("0")
  const account = useAddress()
  const { fastRefresh } = useRefresh()
  const provider = useProvider()

  useEffect(() => {
    const fetchBalance = async () => {
      if(provider && account) {
        const contract = getTokenContract(provider)
        let price = await contract.balanceOf(account)
        setBalance(price.toString());
      }else{
        setBalance("0");
      }
    }

    fetchBalance()
  }, [account, fastRefresh, provider])

  return balance
}