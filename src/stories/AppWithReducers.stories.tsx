import {AppWithReducers} from '../components/AppWithReducers'
import {store} from "../store/store";
import {Provider} from "react-redux";
// import { ReduxStoreProviderDecorator } from './ReduxStoreProviderDecorator'
export default {
  title: 'AppWithReducers Component',
  component: AppWithReducers,
  // decorators: [ReduxStoreProviderDecorator]
}

export const AppWithReduxBaseExample = () => {
  return <>
    <Provider store={store}>
    <AppWithReducers />
      </Provider>
  </>

}