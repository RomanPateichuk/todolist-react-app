import {AppWithCustomHooks} from '../components/AppWithCustomHooks'
// import { ReduxStoreProviderDecorator } from './ReduxStoreProviderDecorator'
export default {
  title: 'AppWithCustomHooks Component',
  component: AppWithCustomHooks,
  // decorators: [ReduxStoreProviderDecorator]
}

export const AppWithReduxBaseExample = () => {
  return <>
      <AppWithCustomHooks />
    </>

}