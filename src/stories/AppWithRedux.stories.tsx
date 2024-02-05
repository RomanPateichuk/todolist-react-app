import {AppWithRedux} from '../components/AppWithRedux'
import {store} from "../store/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
// import { ReduxStoreProviderDecorator } from './ReduxStoreProviderDecorator'
export default {
  title: 'AppWithRedux Component',
  component: AppWithRedux,
  // decorators: [ReduxStoreProviderDecorator]
}

export const AppWithReduxBaseExample = () => {
  return <>
    <Provider store={store}>
      <BrowserRouter>
        <AppWithRedux/>
      </BrowserRouter>
    </Provider>
  </>

}