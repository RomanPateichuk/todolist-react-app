import React, {useEffect} from 'react'
import '../../App.css';
import {Routes, Route, redirect} from 'react-router-dom';
import {Login} from "../common/Login";
import {Layout} from "./pages/Layout";
import {Todolists} from "../common/Todolists";
import {AppRootState} from "../../store/store";
import {useDispatch, useSelector} from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';
import {initializeAppTC} from "../../store/app-reducer";
import { useNavigate } from 'react-router-dom';

export const AppWithRedux = React.memo(() => {
  // @ts-ignore
  const initialized = useSelector<AppRootState, boolean>(state => state.app.initialized)
  const isLoggedIn = useSelector<AppRootState, boolean>(state => state.auth.isLoggedIn)

  const dispatch = useDispatch<any>()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(initializeAppTC())
  }, []);

  useEffect(() => {
    if(!isLoggedIn){
      navigate('/login')
    }
  }, []);



  if(!initialized){
    return <div style={{ position: 'absolute', top: '30%', textAlign: 'center', width: "100%" }}>
      <CircularProgress />
    </div>
  }

  return (
   <Routes>
     <Route path="/" element={<Layout/>}>
        <Route index element={<Todolists/>} />
        <Route path='login' element={<Login/>} />
     </Route>
   </Routes>
  );
})



