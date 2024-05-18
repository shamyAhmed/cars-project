import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './store/index.ts'
import AntdInitializer from './components/global/AntdInitializer.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
        <AntdInitializer>
          <App />
        </AntdInitializer>
    </Provider>
  </React.StrictMode>,
)
