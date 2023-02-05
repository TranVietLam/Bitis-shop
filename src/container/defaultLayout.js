import React from 'react'
import Footer from '../components/footer'
import Header from './../components/header/index';
import routes from '../routes/routes';
import {Routes, Route, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadDataLS } from './../redux/actions/actions';


const DefaultLayout = () => {
  let location = useLocation();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadDataLS());
  }, [location.pathname]);
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