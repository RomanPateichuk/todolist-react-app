import React, {useEffect} from 'react'
import '../../App.css';
import { Routes, Route } from 'react-router-dom';
import {Login} from "../common/Login";
import {Layout} from "./pages/Layout";
import {Todolists} from "../common/Todolists";
import {AppRootState} from "../../store/store";
import {useDispatch, useSelector} from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';
import {initializeAppTC} from "../../store/app-reducer";

export const AppWithRedux = React.memo(() => {

  const dispatch = useDispatch<any>()

  useEffect(() => {
    dispatch(initializeAppTC())
  }, []);

  // @ts-ignore
  const initialized = useSelector<AppRootState, boolean>(state => state.app.initialized)

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



