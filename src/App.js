import React, { useEffect, useState } from 'react';

import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen'
import { auth } from './firebase.js';
import { login, logout, selectUser } from './features/userSlice'

import {
  createBrowserRouter,
  redirect,
  RouterProvider,
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const user = useSelector(selectUser);
  
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("re-redenred")
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
          uid: userAuth.uid,
          email: userAuth.email,
        })
      );
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <>
        {
          !user ? (
            <LoginScreen />
          ) : (
            <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/profile" element={<ProfileScreen />} />
            </Routes>
          )
        }
      </>
    </div>
  );
}

export default App;
