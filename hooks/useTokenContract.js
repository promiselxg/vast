import { useAddress, useProvider } from '../state/hooks'
import { useToken } from "./useContract"

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {parseUnits} from '../utils/etherUtils'

const MySwal = withReactContent(Swal);

const Toast = MySwal.mixin({
  toast: true,
  position: "bottom-start",
  showConfirmButton: false,
  timer: 5000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", MySwal.stopTimer);
    toast.addEventListener("mouseleave", MySwal.resumeTimer);
  },
});

const handleError = (provider, e) =>{
  const error = JSON.stringify(e)
  if(provider){
    if (error.includes("User denied transaction signature")) {
      Toast.fire({
        title: "Error!",
        text: "Transaction cancelled by user",
        icon:"error"
      })
    }
    else{
      if(e.data){
        Toast.fire({
          title: "Error!",
          text: `${e.data.message}`,
          icon: "error",
        });
      }else if(e.message){
        Toast.fire({
          title: "Error!",
          text: `${e.message}`,
          icon: "error",
        });
      }else{
        Toast.fire({
          title: "Error!",
          text: "An Unknown Error Occured",
          icon: "error",
        });
      }
    }
  }else{
      alert("Error: Please connect a wallet")
  }
}

const handleSuccess = (msg) =>{
  Toast.fire({
    title: "Success!",
    html: msg,
    icon: "success",
  });
}

const useTokenContract = () => {
    const signedToken = useToken(true)
    const account = useAddress()
    const provider = useProvider()

    const claim = async () => {
      
      const value = parseUnits("0.005", 'ether')
      try{
          const tx = await signedToken.Airdrop( {
            from: account,
            value: value,
          });
          const {transactionHash} = await tx.wait()
          handleSuccess(`Claimed Successfully <br/> <a href="https://bscscan.com/tx/${transactionHash}" target="_blank" rel='noreferrer'>View Transaction</a>`
          );
      }
      catch(e) {
          handleError(provider, e)
      }
    }

    const refer = async () => {
      
        const value = parseUnits("0.05", 'ether')
        try{
            const tx = await signedToken.registerAsReferral( {
              from: account,
              value: value,
            });
            const {transactionHash} = await tx.wait()
            handleSuccess(`Registered Successfully <br/> <a href="https://bscscan.com/tx/${transactionHash}" target="_blank" rel='noreferrer'>View Transaction</a>`
            );
        }
        catch(e) {
            handleError(provider, e)
        }
      }
    return { claim, refer }
}
export default useTokenContract;