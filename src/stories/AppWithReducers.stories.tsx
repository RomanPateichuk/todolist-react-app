import {AppWithReducers} from '../components/AppWithReducers'
import { ReduxStoreProviderDecorator } from './ReduxStoreProviderDecorator'
export default {
  title: 'AppWithReducers Component',
  component: AppWithReducers,
  decorators: [ReduxStoreProviderDecorator]
}

export const AppWithReduxBaseExample = () => {
  return <>
    <AppWithReducers />
  </>

}