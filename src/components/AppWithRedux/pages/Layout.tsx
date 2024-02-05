import {Outlet, useNavigate} from 'react-router-dom';
import {AppBar, Box, Button, Container, IconButton, Toolbar, Typography} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LinearProgress from "@mui/material/LinearProgress";
import React, {useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../../store/store";
import ErrorSnackBar from "../../common/ErrorSnackBar";
import {logoutTC} from "../../../store/auth-reducer";


export const Layout = () => {
   const isLoggedIn = useSelector<AppRootState, boolean>(state=> state.auth.isLoggedIn)
    // @ts-ignore
    const status = useSelector<AppRootState, string>(state=> state.app.status)
    const dispatch = useDispatch<any>()
    const navigate = useNavigate()
    const logoutHandler = useCallback(() => {
      dispatch(logoutTC())
      navigate('/login')
    }, [])


    return (
      <div className='App'>
          <Box sx={{flexGrow: 1}}>
              <AppBar position='static'>
                <ErrorSnackBar/>
                  <Toolbar>
                      <IconButton
                        size='large'
                        edge='start'
                        color='inherit'
                        aria-label='menu'
                        sx={{mr: 2}}
                      >
                          <MenuIcon/>
                      </IconButton>
                      <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
                          News
                      </Typography>
                    {isLoggedIn &&  <Button color='inherit' onClick={logoutHandler}>Log out</Button>}
                  </Toolbar>
                  {status === 'loading' && <LinearProgress color="inherit"/>}
              </AppBar>
          </Box>
          <Container fixed>
              <Outlet/>
          </Container>
      </div>
    )
}

