import React from 'react'
import ReactDOM from 'react-dom/client'
import {MantineProvider} from '@mantine/core'
import {RouterProvider} from 'react-router-dom'
import {router} from '@/app'
import {Provider} from 'react-redux'
import {store} from './store/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <MantineProvider>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </MantineProvider>
)
