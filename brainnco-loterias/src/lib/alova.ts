import { createAlova } from 'alova'
import GlobalFetch from 'alova/GlobalFetch'
import ReactHook from 'alova/react'

export const api = createAlova({
  baseURL: 'https://loteriascaixa-api.herokuapp.com/api/',
  statesHook: ReactHook,
  requestAdapter: GlobalFetch(),

  // Add `/latest` to the end of the URL
  beforeRequest: (method) => {
    method.url += '/latest'
  },

  // Do some logic on request response
  responded: async (response) => {
    if (!response.ok) {
      console.error(response.statusText)
      throw new Error(response.statusText)
    }

    return await response.json()
  },
})
