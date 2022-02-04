import React from 'react'
import { Provider } from 'react-redux'
import { RefreshContextProvider } from './RefreshContext'
import store from '../state'

const Providers = ({ children }) => {
    return (
        <Provider store={store}>
            <RefreshContextProvider>
                {children}
            </RefreshContextProvider>
        </Provider>
    )
}

export default Providers