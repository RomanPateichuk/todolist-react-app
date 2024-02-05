import {Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, Grid, TextField} from "@mui/material";
import {useFormik} from "formik";
import * as yup from 'yup';
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "../../store/auth-reducer";
import {AppRootState} from "../../store/store";
import { useNavigate } from 'react-router-dom'

export const Login = ()=>{
  const validationSchema = yup.object({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  const dispatch = useDispatch<any>()
  const navigate = useNavigate();

  const isLoggedIn = useSelector<AppRootState, boolean>(state => state.auth.isLoggedIn)

  const formik = useFormik({

    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      dispatch(loginTC(values))
    },
  });

  if(isLoggedIn){
    // not working
    navigate('/', {replace: true})
  }

  return <Grid container alignItems="center" justifyContent="center">
    <Grid item xs={4}>
      <form onSubmit={formik.handleSubmit}>
      <FormControl>
        <FormLabel>
          <div>
            <p>To log in get registered <a href="https://social-network.samuraijs.com/signUp">here</a></p>
            <p>or use common test account credentials:
              <ul>
                <li> Email: free@samuraijs.com</li>
                <li>Password: free</li>
              </ul>
            </p>

          </div>

        </FormLabel>
      <FormGroup>
        <TextField
          label="Email"
          margin="normal"
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          {...formik.getFieldProps("email")}
        />

        <TextField
          label="Password"
          type="password"
          margin="normal"
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          {...formik.getFieldProps("password")}
        />
        <FormControlLabel
          label="Remember me"
          control={
          <Checkbox
            {...formik.getFieldProps("rememberMe")}
            checked={formik.values.rememberMe}
          />
        }
        />
        <Button type="submit" variant="contained" color="primary">Login</Button>
      </FormGroup>
      </FormControl>
      </form>
    </Grid>
  </Grid>
}