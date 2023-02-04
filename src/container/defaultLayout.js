import React from 'react'
import Footer from '../components/footer'
import Header from './../components/header/index';
import routes from '../routes/routes';
import {Routes, Route } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div>
        <Header/>
        <Routes>
            {routes.map((route, idx) => (
                <Route key={idx} path={route.path} element={route.component}/>
            ))}
        </Routes>
        <Footer/>
    </div>
  )
}

export default DefaultLayout