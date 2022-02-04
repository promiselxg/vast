import { createSlice } from '@reduxjs/toolkit';
export const appSlice = createSlice({
  name: 'app',
  initialState: {
    web3Modal: null,
    fetching: true,
    address: '',
    ether: null,
    provider: null,
    signer: null,
    connected: false,
    chainId: null,
  },

  reducers: {
    updateWeb3Modal: (state, action) => {
      state.web3Modal = action.payload;
    },
    updateFetching: (state, action) => {
      state.fetching = action.payload;
    },
    updateAddress: (state, action) => {
      state.address = action.payload;
    },
    updateEthers: (state, action) => {
      state.ether = action.payload;
    },
    updateProvider: (state, action) => {
      state.provider = action.payload;
    },
    updateSigner: (state, action) => {
      state.signer = action.payload;
    },
    updateConnected: (state, action) => {
      state.connected = action.payload;
    },
    updateChainId: (state, action) => {
      state.chainId = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  updateWeb3Modal,
  updateFetching,
  updateAddress,
  updateEthers,
  updateProvider,
  updateConnected,
  updateChainId,
  updateSigner,
} = appSlice.actions;

export default appSlice.reducer;
