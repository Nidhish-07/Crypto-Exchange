import React from 'react'
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom"
import { Layout, Space, Typography } from "antd"
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import CryptoDetails from './pages/CryptoDetails';
import Cryptocurrencies from './pages/Cryptocurrencies';
import Exchanges from './pages/Exchanges';
import News from './pages/News';

function HomeLayout() {
  return (
    <div>
      <div>

        <NavBar></NavBar>
      </div>
      <div>
        <Layout>
          <div>

            <Outlet></Outlet>
          </div>
        </Layout>
      </div>
      <div>

      </div>
    </div>
  );
}

const router = createBrowserRouter([{
  element: <HomeLayout></HomeLayout>, children: [
    {
      path: "/",
      element: <HomePage></HomePage>
    },
    {
      path: "/exchanges",
      element: <Exchanges></Exchanges>
    },
    {
      path: "/cryptocurrencies",
      element: <Cryptocurrencies></Cryptocurrencies>
    },
    {
      path: "/crypto/:coinId",
      element: <CryptoDetails></CryptoDetails>
    },
    {
      path: "/news",
      element: <News></News>
    },
  ]
}])
const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App