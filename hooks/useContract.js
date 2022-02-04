import { useMemo } from 'react'
import {
  getTokenContract
} from "../utils/contractHelpers";

import { useEthers, useSigner } from '../state/hooks'

/**
 * Helper hooks to get specific contracts (by ABI)
 */

export const useToken = (signed=false) => {
  const provider = useEthers()
  const signer = useSigner()
  
  return useMemo(() => getTokenContract(signed ? signer : provider), [provider, signed, signer])
}