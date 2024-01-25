import {AppWithRedux} from '../components/AppWithRedux'
import { ReduxStoreProviderDecorator } from './ReduxStoreProviderDecorator'
export default {
  title: 'AppWithRedux Component',
  component: AppWithRedux,
  decorators: [ReduxStoreProviderDecorator]
}

export const AppWithReduxBaseExample = () => {
  return <>
    <AppWithRedux />
  </>

}