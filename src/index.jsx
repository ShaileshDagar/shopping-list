import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createRouteFromElements, createBrowserRouter, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Error from './components/Error'
import Login, { loader as loginLoader} from './Routes/Login'
import List, { loader as listLoader} from './Routes/List'


const router = createBrowserRouter(createRouteFromElements(
  <Route path="/" element={<Layout/>} errorElement={<Error/>}>
      <Route index element={<List/>} loader={listLoader}/>
      <Route path="login" element={<Login/>} loader={loginLoader}/>
  </Route>
))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
