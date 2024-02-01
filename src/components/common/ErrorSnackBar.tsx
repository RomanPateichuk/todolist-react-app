import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import {Alert} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "../../store/store";
import {setAppErrorAC} from "../../store/app-reducer";

export default function ErrorSnackBar() {
  const dispatch = useDispatch()
  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(setAppErrorAC(null))
  };

  // @ts-ignore
  const error = useSelector<AppRootState, string | null>(state => state.app.error)
  const isOpen = error !==null

  return (
    <div>
      <Snackbar
        open={isOpen}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert severity="error">{error}</Alert>
    </Snackbar>
    </div>
  );
}